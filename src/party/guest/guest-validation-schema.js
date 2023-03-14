import { requiredValidator, minSymbolsValidator, maxSymbolsValidator, dateMinValidator, dateMaxValidator } from "../validation/validation-util"

export const GUEST_VALIDATION_SCHEMA = {
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
    birthDate: {
        validators: [
            requiredValidator("Date is required"),
            dateMinValidator(18, "You must be 18 years old"),
            dateMaxValidator(50, "Sorry, you are so old for the party")

        ]
    },
    sex: {
        validators: [
            requiredValidator("Date is required"),

        ]
    },
    alcohol: {
        validators: [
            requiredValidator("Date is required")


        ]
    }

}