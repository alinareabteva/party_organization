import React, { useState } from "react";
import Input from "./components/input/Input";
import "./Party.css";

const Party = () => {
    const [state, setState] = useState({
        partyName: "",
        firstName: "",
        lastName: "",
        place: "",
        phoneNumber: ""
    })

    const handleChange = ({ target: { name, value } }) => {
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <form id="form" >
            <div id="container">
                <div className="row">
                    <Input id="partyName" label="Party Name:" type="text" value={state.partyName} onChange={handleChange} />
                </div>

                <div className="row ">
                    <Input id="firstName" label="Organizer:" type="text" value={state.firstName} onChange={handleChange} />
                    <Input id="lastName" type="text" value={state.lastName} onChange={handleChange} />
                </div>

                <div className="row">
                    <Input id="place" label="Place:" type="text" value={state.place} onChange={handleChange} />
                </div>

                <div className="row">
                    <Input id="phoneNumber" label="Phone number:" type="text" value={state.phoneNumber} onChange={handleChange} />
                </div>

            </div>

            {/* <div className="footer">Created by Reabtev Alina </div> */}
        </form>
    );
}

export default Party;