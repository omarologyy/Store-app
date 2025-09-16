"use server";

import { revalidatePath } from "next/cache";
import db from "@/utils/db";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { productSchema, imageSchema, validateWithZodType } from "./schemas";
import { deleteImage, uploadImage } from "./supabase";

const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : "An error occurred",
  };
};

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  return user; // In case a user is non-null, this execute
};

const getAdminUser = async () => {
  const user = await getAuthUser();
  if (user.id !== process.env.ADMIN_USER_ID) {
    redirect("/");
  }
  return user;
};

export const fetchAdminProducts = async () => {
  await getAdminUser();
  const products = await db.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return products;
};

export const fetchFeaturedProducts = async () => {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

export const fetchAllProducts = async ({ search = "" }: { search: string }) => {
  return db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const fetchSingleProduct = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) {
    redirect("/products");
  }
  return product;
};

export const createProductAction = async (
  prevState: unknown,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);
    const file = formData.get("image") as File;

    // Validate product fields
    const validatedFields = productSchema.safeParse(rawData);
    if (!validatedFields.success) {
      const errors = validatedFields.error.issues.map((issue) => issue.message);
      throw new Error(errors.join(", "));
    }

    // Validate image file using safeParse
    const validatedFile = imageSchema.safeParse({ image: file });
    if (!validatedFile.success) {
      const errors = validatedFile.error.issues.map((issue) => issue.message);
      throw new Error(errors.join(", "));
    }

    const fullPath = await uploadImage(validatedFile.data.image);
    await db.product.create({
      data: {
        ...validatedFields.data,
        image: fullPath,
        clerkId: user.id,
      },
    });
  } catch (error) {
    return renderError(error);
  }
  redirect("/admin/products");
};

export const deleteProductAction = async (prevState: { productId: string }) => {
  const { productId } = prevState;
  await getAdminUser();

  try {
    const product = await db.product.delete({
      where: {
        id: productId,
      },
    });
    await deleteImage(product.image);
    revalidatePath("/admin/products");
    return { message: "Product removed" };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchAdminProductDetails = async (productId: string) => {
  await getAdminUser();
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) redirect("/admin/products");
  return product;
};

export const updateProductAction = async (
  prevState: unknown,
  formData: FormData
) => {
  await getAdminUser();
  try {
    const productId = formData.get("id") as string;
    const rawData = Object.fromEntries(formData);

    const validatedFields = validateWithZodType(productSchema, rawData);

    await db.product.update({
      where: {
        id: productId,
      },
      data: {
        ...validatedFields,
      },
    });
    revalidatePath(`/admin/products/${productId}/edit`);
    return { message: "Product updated successfully" };
  } catch (error) {
    return renderError(error);
  }
};
export const updateProductImageAction = async (
  prevState: unknown,
  formData: FormData
) => {
  return { message: "Product Image updated successfully" };
};
