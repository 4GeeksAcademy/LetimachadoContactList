import React, { useContext } from "react";
import ContactCard from "../component/ContactCard";
import { Context } from "../store/appContext";

export const Contacts = () => {
    const {store} = useContext(Context)
    return (
        <div className="container">
            <ContactCard/>
        </div>
    );
};

