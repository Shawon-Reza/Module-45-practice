import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div className="border border-4 border-cyan-600 rounded-xl p-3">
            <h1 className="font-bold text-lg"> Oppps Error Occure</h1>
            <p className="mb-3">Error : {error.statusText || error} </p>

            <Link to={-1} className="p-1 px-2  bg-slate-300 rounded-lg hover:bg-orange-500 hover:text-white">Back</Link>
        </div>
    );
};

export default Error;