import { Link, useLoaderData, useNavigation } from "react-router-dom";

const ContactDetails = () => {
    
    const details= useLoaderData()
    const {name,address,website,company}=details
    return (
        <div className="border p-2 mt-3 rounded-md shadow-2xl">
            <div className="border-2 border-cyan-300 rounded-lg p-1 mb-5 flex flex-col gap-1">
                <h1 className="">Name:{name} </h1>
                <p>Address:{address.street} {address.suite} {address.city}</p>
                <p>Company : {company.name} </p>
                <p>Website: {website} </p>
            </div>
            <Link to={-1} className="px-2  bg-slate-300 rounded-lg hover:bg-orange-500 hover:text-white">Back</Link>
        </div>
    );
};

export default ContactDetails;