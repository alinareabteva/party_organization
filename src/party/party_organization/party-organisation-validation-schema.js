import { requiredValidator, minSymbolsValidator, maxSymbolsValidator } from "../validation/validation-util"

export const PARTY_ORGANISATION_VALIDATION_SCHEMA = {
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
        ]
    },
    phoneNumber: {
        validators: [
            requiredValidator("Phone Number is required"),
            maxSymbolsValidator(11, "Phone Number must have a maximum 11 characters")
        ]
    },
}