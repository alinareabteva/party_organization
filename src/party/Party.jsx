import React, { useState } from "react";
import PartyOrganization from "./party_organization/PartyOrganization";
import GuestList, { GUEST_INITIAL_STATE } from "./guest/GuestList";
import Overview from "./overview/Overview";
import SubmitButton from "./submit_button/SubmitButton";
import Modal from "./components/modal/Modal";
import { validateObject, requiredValidator, minSymbolsValidator, maxSymbolsValidator, dateValidator } from "./validation/validation-util"
import "./Party.css";

const PARTY_ORGANISATION_VALIDATION_SCHEMA = {
    partyName: {
        validators: [
            requiredValidator("Party Name is required"),
            minSymbolsValidator(5, "Party Name must have at least 5 characters"),
            maxSymbolsValidator(20, "Party Name must have a maximum 20 characters")
        ]
    },
    firstName: {
        validators: [
            requiredValidator("First Name is required"),
            minSymbolsValidator(4, "First Name must have at least 4 characters"),
            maxSymbolsValidator(20, "First Name must have a maximum 20 characters")
        ]
    },
    lastName: {
        validators: [
            requiredValidator("Last Name is required"),
            minSymbolsValidator(4, "Last Name must have at least 4 characters"),
            maxSymbolsValidator(20, "Last Name must have a maximum 20 characters")
        ]
    },
    place: {
        validators: [
            requiredValidator("Place is required"),
            maxSymbolsValidator(30, "Place must have a maximum 30 characters")
        ]
    },
    date: {
        validators: [
            requiredValidator("Date is required"),
            dateValidator(18, "You must be 18 years old")

        ]
    },
    phoneNumber: {
        validators: [
            requiredValidator("Phone Number is required"),
            maxSymbolsValidator(11, "Phone Number must have a maximum 11 characters")
        ]
    },
}

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
            partyName: "",
            firstName: "",
            lastName: "",
            place: "",
            date: "",
            phoneNumber: "",

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

    const setPartyErrors = (partyErrors) => {
        setState(prevState => ({
            ...prevState,
            errors: {
                ...partyErrors
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
        setPartyErrors,
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
        setPartyErrors,
        handleCancel
    } = usePartyState();

    const handleClickSubmit = (e) => {
        // check party organisation (validate all inputs in state.partyOrganization)
        // if there exist at least one error show them on related input
        // only if user has no errors -> then we need to show modal
        // (note: when user inputs some values we need to remove error if exist for that input)

        e.preventDefault();
        const errors = validateObject(partyOrganization, PARTY_ORGANISATION_VALIDATION_SCHEMA)

        if (Object.keys(errors).length > 0) {
            debugger            
            setPartyErrors(errors)
            return;
        }
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
                    <b>{partyOrganization.date}</b> at 
                    <b>{partyOrganization.place}</b> will be 
                    <b>"{partyOrganization.partyName}"</b> with next list of guests:
                </p>

                <div className="guests-list">

                </div>
            </Modal>
        </>
    );
}

export default Party;