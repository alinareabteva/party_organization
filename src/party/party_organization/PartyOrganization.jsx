import React from "react";
import Input from "../components/input/Input";
import "./PartyOrganization.scss";

const PartyOrganization = ({ partyOrganization, handleChange }) => {

    return (
        <>
            <div className="row">
                <Input id="partyName" label="Party Name:" placeholder="Enter Party Name" type="text" value={partyOrganization.partyName} onChange={handleChange} />
            </div>

            <div className="row organizer">
                <Input id="firstName" label="Organizer:" placeholder="First Name" type="text" value={partyOrganization.firstName} onChange={handleChange} />
                <Input id="lastName" placeholder="Last Name" type="text" value={partyOrganization.lastName} onChange={handleChange} />
            </div>

            <div className="row">
                <Input id="place" label="Place:" placeholder="Enter Place" type="text" value={partyOrganization.place} onChange={handleChange} />
            </div>

            <div className="row">
                <Input id="phoneNumber" label="Phone number:" placeholder="Phone Number" type="text" value={partyOrganization.phoneNumber} onChange={handleChange} />
            </div>

        </>

    );
}

export default PartyOrganization;