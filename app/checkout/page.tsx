// "use client";
// import axios from "axios";
// import { useSearchParams } from "next/navigation";
// import React, { useCallback } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   EmbeddedCheckoutProvider,
//   EmbeddedCheckout,
// } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
// );

// export default function CheckoutPage() {
//   const searchParams = useSearchParams();

//   const orderId = searchParams.get("orderId");
//   const cartId = searchParams.get("cartId");

//   const fetchClientSecret = useCallback(async () => {
//     // Create a Checkout Session
//     const response = await axios.post("/api/payment", {
//       orderId: orderId,
//       cartId: cartId,
//     });
//     return response.data.clientSecret;
//   }, []);

//   const options = { fetchClientSecret };

//   return (
//     <div id="checkout">
//       <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
//         <EmbeddedCheckout />
//       </EmbeddedCheckoutProvider>
//     </div>
//   );
// }

"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useCallback, Suspense } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import Lottie from "lottie-react";
import LoadAnimation from "@/Material wave loading.json";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

function CheckoutContent() {
  const searchParams = useSearchParams();

  const orderId = searchParams.get("orderId");
  const cartId = searchParams.get("cartId");

  const fetchClientSecret = useCallback(async () => {
    // Create a Checkout Session
    const response = await axios.post("/api/payment", {
      orderId: orderId,
      cartId: cartId,
    });
    return response.data.clientSecret;
  }, [orderId, cartId]); // Added missing dependencies

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <Lottie animationData={LoadAnimation} className="w-48 h-48" />
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
