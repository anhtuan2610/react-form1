import { useState } from "react";
import { createProduct } from "../../services/product-api";
import { Product } from "../ProductList";
import { useNavigate } from "react-router-dom";

type TProductNoId = Omit<Product, "id">;

export default function ProductCreate() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(Number);
  const [description, setDescription] = useState("");

  async function handleCreate() {
    //   console.log({title, price, description});
    try {
      const newProduct: TProductNoId = {
        title: title,
        price: price,
        description: description,
      };
      await createProduct(newProduct);
      navigate("/product");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="py-2">
        <label className="pr-2 w-20 inline-block">Title</label>
        <input
          onChange={(e) => setTitle(e.target.value)} 
          value={title} 
          className="p-2 border-2 border-red-600"
          type="text"
        />
      </div>
      <div className="py-2">
        <label className="pr-2 w-20 inline-block">Price</label>
        <input
          onChange={(e) => setPrice(Number(e.target.value))}
          value={price}
          className="p-2 border-2 border-red-600"
          type="text"
        />
      </div>
      <div className="py-2">
        <label className="pr-2 w-20 inline-block">Description</label>
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="p-2 border-2 border-red-600"
          type="text"
        />
      </div>
      <div>
        <button className="border-2 border-red-600 p-2" onClick={handleCreate}>
          Create New Product
        </button>
      </div>
    </div>
  );
}
