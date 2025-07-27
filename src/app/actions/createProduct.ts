"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createProduct(formData: FormData) {
  const title = formData.get("title")?.toString();
  const price = Number(formData.get("price"));
  const description = formData.get("description")?.toString();
  const categoryId = Number(formData.get("categoryId"));
  const image = formData.get("image")?.toString();

  if (!title || !description || !categoryId || !image || isNaN(price)) {
    throw new Error("Missing required fields");
  }

  const productData = {
    title,
    price,
    description,
    categoryId,
    images: [image],
  };

  const res = await fetch("https://api.escuelajs.co/api/v1/products/", {
    method: "POST",
    body: JSON.stringify(productData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to create product");
  }

  revalidateTag("products");
  redirect("/products");
}
