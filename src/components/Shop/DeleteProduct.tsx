type Props = {
    productId: number,
    handleDeleteProduct: (id: number) => void;
}

export default function DeleteProduct({ productId, handleDeleteProduct }: Props) {
  return (
    <button
      onClick={() => handleDeleteProduct(productId)}
      className="border-2 border-red-600 p-2"
    >
      Delete
    </button>
  );
}