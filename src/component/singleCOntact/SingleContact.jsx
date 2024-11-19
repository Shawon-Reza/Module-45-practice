import { Link, useNavigate } from "react-router-dom";

const SingleContact = ({ contact }) => {
    const { id, name, email } = contact;
    const navigate = useNavigate()
    const addlink = () => {
        navigate(`/contact/${id}`)
    }

    return (
        <div className="border p-2  flex flex-col shadow-xl ">
            <h3 className="font-bold">Name : {name}</h3>
            <p className="flex-grow overflow-auto">Email : {email}</p>

            {/* <Link to={`/contact/${id}`} className="p-2 bg-slate-400 rounded-lg hover:bg-orange-400 hover:text-white">Details</Link> */}
            <button onClick={addlink} className="p-2 bg-slate-400 mt-2">BtnDetails</button>
        </div>
    );
};

export default SingleContact;