import { useEffect } from "react";
import { Outlet, useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function PublicLayout() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const isLogin = searchParams.get("isLogin");

        if (!(isLogin === "true")) {
            navigate("/home")
        }
    }, [navigate, useParams])
  return (
    <div>
      <h1>Private Layout</h1>
      <Outlet />
    </div>
  );
}
