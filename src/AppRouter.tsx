import { Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import ProductCreate from "./pages/ProductCreate";
import ProductEdit from "./pages/ProductEdit";
import NavBar from "./pages/NavBar";
import ValidateForm from "./pages/ValidateForm";
import TestHook from "./pages/CustomHookTest";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/" element={<ProductList />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/product/create" element={<ProductCreate />} />
        <Route path="/product/:id/edit" element={<ProductEdit />} />
      </Route>
      {/* <Route path="/" element={<ValidateForm />}></Route>
      <Route path="/form" element={<ValidateForm />}></Route> */}
      {/* <Route path="/" element={<TestHook />}></Route> */}
    </Routes>
  );
}
