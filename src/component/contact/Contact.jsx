

import { useLoaderData, useLocation, useNavigation } from "react-router-dom";
import SingleContact from "../singleCOntact/SingleContact";

const Contact = () => {

    const navigation=useNavigation()
    console.log(navigation);
   



    const users = useLoaderData()
    return (
        <div>
            <h1>Contact page</h1>
            <p>Users length : {users.length} </p>
            <div className="grid grid-cols-3 gap-5 mt-5 border rounded-md p-2 shadow-2xl">
                {
                    users.map((contact,idx) => <SingleContact
                        contact={contact}
                        key={idx}
                    ></SingleContact>)
                }
            </div>

        </div>
    );
};

export default Contact;