import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  editProduct,
  getProducts,
  TProductNoId,
} from "../../services/product-api";

export default function ProductEdit() {
  const navigate = useNavigate();
  const { id } = useParams<string>();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(Number);
  const [description, setDescription] = useState("");

  async function fetchProducts() {
    try {
      const data = await getProducts({ id });
      if (data.length > 0) {
        const p = data[0];
        setTitle(p.title);
        setPrice(p.price);
        setDescription(p.description);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleEdit() {
    try {
      const data: TProductNoId = {
        title: title,
        price: price,
        description: description,
      };
      await editProduct(Number(id), data);
      navigate("/product");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [id]);

  return (
    <div>
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
      </div>
      <div>
        <button className="border-2 border-red-600 p-2" onClick={handleEdit}>
          Edit Product
        </button>
      </div>
    </div>
  );
}
