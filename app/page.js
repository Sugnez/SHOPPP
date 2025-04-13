"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "Vintage Nike Trackpants",
    price: "€79.00",
    image: "https://cdn.shopify.com/s/files/1/0680/4150/7113/files/nike1.webp?v=1711123456",
  },
  {
    id: 2,
    name: "Lacoste 90s Windbreaker",
    price: "€129.00",
    image: "https://cdn.shopify.com/s/files/1/0680/4150/7113/files/lacoste1.webp?v=1711123456",
  },
  {
    id: 3,
    name: "Y2K Versace Shirt",
    price: "€99.00",
    image: "https://cdn.shopify.com/s/files/1/0680/4150/7113/files/versace1.webp?v=1711123456",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] px-4 py-10 font-sans">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-semibold tracking-tight uppercase">
          Komat Boutique
        </h1>
        <p className="text-md text-gray-600 mt-4">
          Vintage Streetwear aus den 90ern & 2000ern
        </p>
      </header>

      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((product) => (
          <Card
            key={product.id}
            className="bg-white rounded-none border border-gray-300 shadow-none"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-cover"
            />
            <CardContent className="p-4">
              <h2 className="text-lg font-medium uppercase tracking-wide">
                {product.name}
              </h2>
              <p className="text-sm text-gray-500 mb-3">{product.price}</p>
              <Button
                variant="outline"
                className="w-full border-black hover:bg-black hover:text-white text-sm uppercase tracking-wide"
              >
                In den Warenkorb
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="text-center mt-24 text-xs text-gray-400 uppercase tracking-wide">
        &copy; {new Date().getFullYear()} Komat Boutique – Alle Rechte vorbehalten
      </footer>
    </div>
  );
}
