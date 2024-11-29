import React, { useEffect, useMemo } from "react";
import PartyOrganization from "./party_organization/PartyOrganization";
import GuestList from "./guest/GuestList";
import Overview, { getAge } from "./overview/Overview";
import SubmitButton from "./components/submit_button/SubmitButton";
import Modal from "./components/modal/Modal";
import { validateObject } from "./validation/validation-util";
import { usePartyState } from "./usePartyState";
import { PARTY_ORGANISATION_VALIDATION_SCHEMA } from "./party_organization/party-organisation-validation-schema";
import { GUEST_VALIDATION_SCHEMA } from "./guest/guest-validation-schema";
import "./Party.scss";

const Party = () => {
    const {
        partyState: { partyOrganization, guests, modal, errors, touched },
        handlePartyOrganizationChange,
        handleGuestChange,
        removeGuest,
        addGuest,
        openModal,
        handleSubmit,
        setPartyErrors,
        setGuestErrors,
        handleCancel
    } = usePartyState();

    const handleClickSubmit = (e) => {
        e.preventDefault();
        const partyErrors = validateObject(partyOrganization, PARTY_ORGANISATION_VALIDATION_SCHEMA)
        setPartyErrors(partyErrors)
        if (Object.keys(partyErrors).length === 0) {
            openModal(e);
        }
    }

    useEffect(() => {
        setGuestErrors(guests.map(guest => validateObject(guest, { ...GUEST_VALIDATION_SCHEMA }))
        )
    }, [guests])

    useEffect(() => {
        const partyErrors = validateObject(partyOrganization, PARTY_ORGANISATION_VALIDATION_SCHEMA)
        setPartyErrors(partyErrors)
    }, [partyOrganization])


    const isDisabled = useMemo(() => {
        const partyOrganizationErrors = Object.values(errors.partyOrganization).length > 0;
        const guestErrors = errors.guests.some((error) => Object.values(error).length > 0)
        return partyOrganizationErrors || guestErrors;
    }, [errors])


    return (
        <>
            <form id="form">
                <div id="container">
                    <PartyOrganization
                        touched={touched}
                        errors={errors.partyOrganization}
                        handleChange={handlePartyOrganizationChange}
                        partyOrganization={partyOrganization} />
                    <GuestList
                        touched={touched}
                        guests={guests}
                        errors={errors.guests}
                        setGuestErrors={setGuestErrors}
                        onChangeGuest={handleGuestChange}
                        removeGuest={removeGuest}
                        addGuest={addGuest}
                    />
                    <Overview guests={guests} />
                </div>
                <SubmitButton
                    onClick={handleClickSubmit}
                    disabled={isDisabled}
                />
            </form>
            <Modal
                title="The affirmation"
                isOpen={modal.open}
                onCancel={handleCancel}
                onSubmit={handleSubmit}
            >
                <p>
                    <b>{partyOrganization.date}</b> at &nbsp;
                    <b>{partyOrganization.place}</b> will be &nbsp;
                    <b>"{partyOrganization.partyName}"</b> with next list of guests:
                </p>

                <ol className="guests-list">
                    {guests.map((guest, index) => (
                        <li key={index}>
                            {guest.firstName + " " + guest.lastName + " " + getAge(guest.birthDate)}
                        </li>)
                    )}
                </ol>
            </Modal>
        </>
    );
}

export default Party;