import { Link, Outlet } from "react-router-dom";

export default function NavBar() {
    return <div>
        <div className="flex justify-between w-1/2 border-2 border-blue-600 bg-blue-200">
            <div className="p-4">Navbar</div>
            <div className="p-4 flex gap-10">
                <Link to="/product">Home</Link>
                <Link to="/product/create">Create</Link>
            </div>
        </div>
        <Outlet/>
    </div>
}