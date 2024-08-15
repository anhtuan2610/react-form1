import { useEffect, useState } from "react";
import { Product } from "../pages/ProductList";
import { getProducts } from "../services/product-api";

export default function useDidMount() {
  const [products, setProducts] = useState<Product[]>();

  async function fetchData() {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
    console.log("did mount");
  }, []);

  return { products };
}
