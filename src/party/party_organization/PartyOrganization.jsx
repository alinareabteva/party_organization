import React from "react";
import Input from "../components/input/Input";
import "./PartyOrganization.scss";

const PartyOrganization = ({ partyOrganization, handleChange, errors }) => {
    return (
        <>
            <div className="row">
                <Input
                    id="partyName"
                    label="Party Name:"
                    placeholder="Enter Party Name"
                    type="text"
                    value={partyOrganization.partyName}
                    onChange={handleChange}
                    error={errors?.partyName}
                />
            </div>

            <div className="row organizer">
                <Input
                    id="firstName"
                    label="Organizer:"
                    placeholder="First Name"
                    type="text"
                    value={partyOrganization.firstName}
                    onChange={handleChange}
                    error={errors?.firstName}
                />
                <Input
                    id="lastName"
                    placeholder="Last Name"
                    type="text"
                    value={partyOrganization.lastName}
                    onChange={handleChange}
                    error={errors?.lastName}
                />
            </div>

            <div className="row">
                <Input
                    id="place"
                    label="Place:"
                    placeholder="Enter Place"
                    type="text"
                    value={partyOrganization.place}
                    onChange={handleChange}
                    error={errors?.place}
                />
            </div>

            <div className="row">
                <Input
                    id="date"
                    label="Date:"
                    placeholder="Enter Date"
                    type="date"
                    value={partyOrganization.date}
                    onChange={handleChange}
                    error={errors?.date}
                />
            </div>

            <div className="row">
                <Input
                    id="phoneNumber"
                    label="Phone number:"
                    placeholder="Phone Number"
                    type="text"
                    value={partyOrganization.phoneNumber}
                    onChange={handleChange}
                    error={errors?.phoneNumber}
                />
            </div>

        </>

    );
}

export default PartyOrganization;