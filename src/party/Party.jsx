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
        errors: {

        },
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

    const openModal = (e) => {
        e.preventDefault();
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

    const handleClickSubmit = (e) => {

        // check party organisation (validate all inputs in state.partyOrganization)
        // if there exist at least one error show them on related input
        // only if user has no errors -> then we need to show modal
        // (note: when user inputs some values we need to remove error if exist for that input)
        openModal(e)
        
    }

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
                <SubmitButton onClick={handleClickSubmit} />
            </form>
            <Modal
                title="The affirmation"
                isOpen={modal.open}
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