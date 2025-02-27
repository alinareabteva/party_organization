import { getAge } from "../overview/Overview";

export const validatorHelper = (validator, errorMessage) => {
    return (value) => {
        if (validator(value)) {
            return ""
        }
        return errorMessage;
    }
}

export const requiredValidator = (errorMessage) => {
    return validatorHelper(v => !!v, errorMessage);
}

export const minSymbolsValidator = (number, errorMessage) => {
    return validatorHelper(v => v.length >= number, errorMessage);
}

export const maxSymbolsValidator = (number, errorMessage) => {
    return validatorHelper(v => v.length <= number, errorMessage);
}

export const dateMinValidator = (limitYear, errorMessage) => {
    return validatorHelper(v => getAge(v) >= limitYear, errorMessage)
}

export const dateMaxValidator = (limitYear, errorMessage) => {
    return validatorHelper(v => getAge(v) <= limitYear, errorMessage)
}

export const validateObject = (objectToValidate, schemaForValidate) => {
    return Object.entries(objectToValidate).reduce((acc, [fieldName, fieldValue]) => {
        const error = schemaForValidate[fieldName]?.validators?.map(validator => validator(fieldValue))?.find(v => v?.length > 0);
        if (error) {
            acc[fieldName] = error;
        }
        return acc
    }, {})
}