import { Product } from "@/types";
import React from "react";
import Image from "next/image";

export default async function Products() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    next: { tags: ["products"] },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const products = await res.json();
  return (
    <div>
      <ul>
        {products.map((product: Product) => (
          <li key={product.id}>
            <p>{product.title}</p>
            <Image
              src={product.images[0]}
              alt={product.title}
              width={200}
              height={200}
              unoptimized
            />
            <p>{product.description}</p>
            <p>{product.slug}</p>
            <p>{product.price}</p>
            <p>{product.category.name}</p>              
          </li>
        ))}
      </ul>
    </div>
  );
}