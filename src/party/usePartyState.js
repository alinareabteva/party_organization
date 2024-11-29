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
        touched: {
            partyOrganization: {
                partyName: false,
                firstName: false,
                lastName: false,
                place: false,
                date: false,
                phoneNumber: false,
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
            },
            touched: {
                ...prevState.touched,
                [name]: true
            }
        }))
    }

    const handleGuestChange = (guestToReplace, id) => {
        setState(prevState => ({
            ...prevState,
            guests: prevState.guests.map((guest, index) => {
                if (index !== id) {
                    return guest;
                }

                return guestToReplace;
            }),

            touched: {
                ...prevState.touched,

                
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

    const removeGuest = (id) => {
        setState((prevState) => ({
            ...prevState,
            guests: prevState.guests.filter((el, index) => index !== id),
            touched: {
                ...prevState.touched,
                guests: prevState.touched.guests.filter((el, index) => index !== id)
            }
        }))
    }

    const addGuest = (guestToAdd) => {
        setState((prevState) => ({
            ...prevState,
            guests: [...prevState.guests, guestToAdd],
            touched: {
                ...prevState.touched,
                guests: [...prevState.touched.guests, {}]
            }
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
        removeGuest,
        addGuest,
        openModal,
        handleSubmit,
        setPartyErrors,
        setGuestErrors,
        handleCancel
    }
}