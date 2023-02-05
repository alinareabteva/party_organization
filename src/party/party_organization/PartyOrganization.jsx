import React, { useState } from "react";
import Input from "../components/input/Input";
import "./PartyOrganization.scss";

const PartyOrganization = () => {
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
        <>
            <div className="row">
                <Input id="partyName" label="Party Name:" placeholder="Enter Party Name" type="text" value={state.partyName} onChange={handleChange} />
            </div>

            <div className="row organizer">
                <Input id="firstName" label="Organizer:" placeholder="First Name" type="text" value={state.firstName} onChange={handleChange} />
                <Input id="lastName" placeholder="Last Name" type="text" value={state.lastName} onChange={handleChange} />
            </div>

            <div className="row">
                <Input id="place" label="Place:" placeholder="Enter Place" type="text" value={state.place} onChange={handleChange} />
            </div>

            <div className="row">
                <Input id="phoneNumber" label="Phone number:" placeholder="Phone Number" type="text" value={state.phoneNumber} onChange={handleChange} />
            </div>

        </>

    );
}

export default PartyOrganization;