---
# 🛒 Fullstack Ecommerce App

A modern fullstack ecommerce application built with **Next.js** and **TypeScript**, designed for scalability, security, and a smooth user experience.

This project integrates **authentication, data management, UI components, and payments** to provide a production-ready ecommerce solution.
---

## 🚀 Features

- 🔑 **Authentication** – Seamless user sign-up/sign-in with [Clerk](https://clerk.dev).
- 🎨 **Beautiful UI** – Styled with [shadcn/ui](https://ui.shadcn.com) for modern and accessible interfaces.
- 📦 **Product Management** – Store and manage products in the cloud using [Supabase](https://supabase.com).
- 💳 **Secure Payments** – Integrated with [Stripe](https://stripe.com) for handling checkout and transactions.
- ⚡ **Performance** – Built on [Next.js](https://nextjs.org) with **server-side rendering (SSR)** and **static site generation (SSG)**.
- 🛠 **TypeScript** – Strong typing to catch errors early and improve developer productivity.

---

## 🏗️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Auth**: [Clerk](https://clerk.dev)
- **UI**: [shadcn/ui](https://ui.shadcn.com)
- **Database**: [Supabase](https://supabase.com)
- **Payments**: [Stripe](https://stripe.com)

---

## 📂 Project Structure

```bash
src/
  components/    # Reusable UI components
  pages/         # Next.js pages (routes)
  lib/           # Utilities and configs
  styles/        # Global and component styles
  services/      # API integrations (Stripe, Supabase, Clerk)
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/omarologyy/Store-app.git
cd Store-app
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory and add the following:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Testing

```bash
npm run test
```

---

## 📦 Deployment

You can easily deploy this project on [Vercel](https://vercel.com) (recommended) or any other platform that supports Next.js.

---

## 💡 Future Improvements

- Add product categories and search functionality
- Implement user profiles and order history
- Add admin dashboard for product & order management
- Improve SEO and accessibility

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---
