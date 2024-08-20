import { useEffect } from "react";
import { deleteProduct } from "../../services/product-api";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks/index";
import { removeProduct } from "../../store/slides/products";
import DeleteProduct from "../../components/Shop/DeleteProduct";
import { fetchProduct } from "../../store/thunks/product.thunk";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

export default function ProductList() {
  const data: Product[] = useAppSelector((state) => state.products.data);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  function handleDeleteProduct(id: number) {
    deleteProduct(id);
    dispatch(removeProduct(id));
  }

  return (
    <div>
      {data?.map((p) => (
        <div className="flex justify-between w-1/2 border-2 border-blue-400 p-2 my-2">
          <div onClick={() => navigate(`/product/${p.id}`)}>{p.title}</div>
          <div className="z-10">
            <DeleteProduct productId={p.id} handleDeleteProduct={handleDeleteProduct} />
          </div>
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
