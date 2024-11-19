import { Link, Outlet, useLocation } from "react-router-dom";

const Home = () => {
    const location=useLocation()
    console.log(location);
    return (
        <div className="border border-4 border-lime-600 rounded-xl p-3">
            <div className="flex justify-around">
                <Link to="/contact" className="font-extrabold p-1
                bg-gray-300 rounded-lg hover:bg-orange-500 hover:text-white">Contact</Link>
                <Link to="/" className="font-extrabold p-1
                bg-gray-300 rounded-lg hover:bg-orange-500 hover:text-white">Home</Link>
            </div>
            <h1 className="mt-3">Home page : Practicing React Ruting</h1>

            <Outlet></Outlet>
        </div>
    );
};

export default Home;