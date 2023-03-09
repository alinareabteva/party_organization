import { useState } from "react"
import { GUEST_INITIAL_STATE } from "./guest/GuestList"

export const usePartyState = () => {
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
            partyOrganization: {
                partyName: "",
                firstName: "",
                lastName: "",
                place: "",
                date: "",
                phoneNumber: "",
            },
            guests: []
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
                ...prevState.errors,
                partyOrganization: {
                    ...partyErrors
                }
               
            }
        }))
    }

    const setGuestErrors = (guestErrors = []) => {
        setState(prevState => ({
            ...prevState,
            errors: {
                ...prevState.errors,
                guests: guestErrors
               
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
        setGuestErrors,
        handleCancel
    }
}