import React, { useMemo } from "react";
import Guest from "./Guest";
import Button from "../components/button/Button";
import "./GuestList.scss";

export const GUEST_INITIAL_STATE = {
    firstName: "",
    lastName: "",
    birthDate: "",
    sex: "",
    alcohol: [],
}

const GuestList = ({ guests, onChangeGuest, removeGuest, addGuest, errors, touched }) => {

    const alcoholChange = (id, value) => {
        handleChange(id, "alcohol", value)
    }

    const handleChange = (id, name, value) => {
        const guestByIndex = guests[id];
        onChangeGuest({
            ...guestByIndex,
            [name]: value
        }, id)

    }

    const onClickDelete = (id) => {
        removeGuest(id);
    }

    const onClickAddGuest = (e) => {
        e.preventDefault();
        addGuest({
            ...GUEST_INITIAL_STATE
        })
    }

    const isDisabled = useMemo(() => {
        return errors.some((error) => Object.values(error).length > 0);
    }, [errors])


    return (
        <div className="guests">
            <h2 className="guestsLabel">Guests:</h2>
            <div className="guestList">
                {guests.map((el, index) => (
                    <Guest
                        key={index}
                        index={index}
                        errors={errors[index]}
                        touched={touched}
                        isLastItem={index === guests.length - 1}
                        guest={el}
                        handleGuestChange={handleChange}
                        onAlcoholChange={alcoholChange}
                        onClickDelete={onClickDelete}
                    />)
                )}
            </div>
            <div className="addGuest">
                <Button
                    onClick={onClickAddGuest}
                    disabled={isDisabled}
                >
                    Add Guest
                </Button>

            </div>

        </div>
    )
};

export default GuestList;