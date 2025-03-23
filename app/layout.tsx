"use client";

import type React from "react";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";
import { WishlistProvider } from "@/context/wishlist-context";
import { CartProvider } from "@/context/cart-context";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="min-h-screen flex flex-col"
        style={{ backgroundColor: "#f5efe2" }}
      >
        <CartProvider>
          <WishlistProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
