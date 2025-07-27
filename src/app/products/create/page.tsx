import { createProduct } from "@/app/actions/createProduct";

export default async function CreateProduct() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories");
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  const categories = await res.json();

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
      <form action={createProduct} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-1">
            Product Name
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Product name"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="price" className="block mb-1">
            Price
          </label>
          <input
            className="w-full p-2 border rounded"
            type="number"
            id="price"
            name="price"
            placeholder="Price"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block mb-1">
            Description
          </label>
          <textarea
            className="w-full p-2 border rounded"
            id="description"
            name="description"
            placeholder="Description"
            required
          />
        </div>

        <div>
          <label htmlFor="categoryId" className="block mb-1">
            Category
          </label>
          <select
            id="categoryId"
            name="categoryId"
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select a category</option>
            {categories.map((category: any) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="image" className="block mb-1">
            Image URL
          </label>
          <input
            className="w-full p-2 border rounded"
            type="url"
            id="image"
            name="image"
            placeholder="Add product image"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Save Product
        </button>
      </form>
    </div>
  );
}
