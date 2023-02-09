import React, { useState } from "react";
import PartyOrganization from "./party_organization/PartyOrganization";
import GuestList, { GUEST_INITIAL_STATE } from "./guest/GuestList";
import Overview from "./overview/Overview";
import "./Party.css";

const usePartyState = () => {
    const [state, setState] = useState({
        partyOrganization: {
            partyName: "",
            firstName: "",
            lastName: "",
            place: "",
            date: "",
            phoneNumber: ""
        },
        guests: [{
            ...GUEST_INITIAL_STATE
        }],
        modal: {
            open: false,
        }

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
    return {
        partyState: state,
        handlePartyOrganizationChange,
        handleGuestChange
    }
}

const Party = () => {
    const {
        partyState: {partyOrganization, guests},
        handlePartyOrganizationChange,
        handleGuestChange
    } = usePartyState();

    return (
        <>
            <form id="form">
                <div id="container">
                    <PartyOrganization handleChange={handlePartyOrganizationChange} partyOrganization={partyOrganization} />
                    <GuestList guests={guests} onChangeGuests={handleGuestChange} />
                    <Overview guests={guests} />
                </div>
                {/* submit Button */}
            </form>
            {/* modal */}
        </>
    );
}

export default Party;