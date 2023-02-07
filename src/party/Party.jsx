import React, { useState } from "react";
import PartyOrganization from "./party_organization/PartyOrganization";
import GuestList, { GUEST_INITIAL_STATE } from "./guest/GuestList";
import Overview from "./overview/Overview";
import "./Party.css";

const Party = () => {
    const [state, setState] = useState({
        partyOrganization: {
            partyName: "",
            firstName: "",
            lastName: "",
            place: "",
            phoneNumber: ""
        },
        guests: [{
            ...GUEST_INITIAL_STATE
        }]

    })

    const handlePartyOrganizationChange = ({ target: { name, value } }) => {
        setState(prevState => ({
            ...prevState,
            partyOrganization: {
                ...prevState.partyOrganization,
                [name]: value
            }
        }))
    }

    const handleGuestChange = (guests) => {
        setState(prevState => ({
            ...prevState,
            guests

        }))

    }

    return (
        <form id="form">
            <div id="container">
                <PartyOrganization handleChange={handlePartyOrganizationChange} partyOrganization={state.partyOrganization} />
                <GuestList guests={state.guests} onChangeGuests={handleGuestChange} />
                <Overview />

            </div>
        </form>
    );
}

export default Party;