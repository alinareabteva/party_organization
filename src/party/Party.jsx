import React, { useState } from "react";
import PartyOrganization from "./party_organization/PartyOrganization";
import GuestList, { GUEST_INITIAL_STATE } from "./guest/GuestList";
import Overview from "./overview/Overview";
import SubmitButton from "./submit_button/SubmitButton";
import Modal from "./components/modal/Modal";
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

    const openModal = () => {
        setState(prevState => ({
            ...prevState,
            modal: {
                open: true
            }

        }))
    }

    const handleSubmit = () => {
        setState(prevState => ({
            ...prevState,
            modal: {
                open: false
            }

        }))
    }

    const handleCancel = () => {
        setState(prevState => ({
            ...prevState,
            modal: {
                open: false
            }
        }))
    }


    return {
        partyState: state,
        handlePartyOrganizationChange,
        handleGuestChange,
        openModal,
        handleSubmit,
        handleCancel
    }
}

const Party = () => {
    const {
        partyState: { partyOrganization, guests, modal },
        handlePartyOrganizationChange,
        handleGuestChange,
        openModal,
        handleSubmit,
        handleCancel
    } = usePartyState();

    return (
        <>
            <form id="form">
                <div id="container">
                    <PartyOrganization
                        handleChange={handlePartyOrganizationChange}
                        partyOrganization={partyOrganization} />
                    <GuestList
                        guests={guests}
                        onChangeGuests={handleGuestChange} />
                    <Overview guests={guests} />
                </div>
                <SubmitButton onClick={openModal} />
            </form>
            <Modal
                title="The affirmation"
                isOpen={openModal}
                onCancel={handleCancel}
                onSubmit={handleSubmit}
            >
                <p>
                    glugufu
                </p>
            </Modal>
        </>
    );
}

export default Party;