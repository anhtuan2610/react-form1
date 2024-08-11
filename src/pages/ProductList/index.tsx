import { useEffect, useState } from "react";
import { getProducts } from "../../services/product-api";
import { useNavigate } from "react-router-dom";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>();
  const navigate = useNavigate();

  async function fetchProducts() {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products?.map((p) => (
        <div
          className="w-1/2 border-2 border-blue-400 p-2 my-2"
          onClick={() => navigate(`/product/${p.id}`)}
        >
          <div>{p.title}</div>
        </div>
      ))}

      <div className="flex">
        <div>
          <button
            className="border-2 border-red-600 p-2"
            onClick={() => navigate("/product/create")}
          >
            Add product
          </button>
        </div>
      </div>
    </div>
  );
}
