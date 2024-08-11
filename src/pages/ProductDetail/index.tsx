import { useNavigate, useParams } from "react-router-dom";
import { getProducts } from "../../services/product-api";
import { useEffect, useState } from "react";
import { Product } from "../ProductList";

export default function ProductDetail() {
  const { id } = useParams<string>();
  const navigate = useNavigate();
  // const param = {
  //     id: id
  // }
  const [products, setProducts] = useState<Product[]>();

  async function fetchProducts() {
    try {
      const data = await getProducts({ id });
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
        <div>
          <div>id: {p.id}</div>
          <div>title: {p.title}</div>
          <div>description: {p.description}</div>
          <div>price: {p.price}</div>
          <div>
            <button
              className="border-2 border-red-600 p-2"
              onClick={() => navigate(`/product/${p.id}/edit`)}
            >
              Edit product
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
