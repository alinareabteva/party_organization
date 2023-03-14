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

const GuestList = ({ guests, onChangeGuests, errors }) => {

    const alcoholChange = (id, value) => {
        onChangeGuests(guests.map((el, index) => {
            if (id !== index) {
                return el;
            }
            return {
                ...el,
                alcohol: value
            }
        }))

    }

    const handleChange = (id, name, value) => {
        onChangeGuests(guests.map((el, index) => {
            if (id !== index) {
                return el;
            }
            return {
                ...el,
                [name]: value
            }

        }))

    }

    const onClickDelete = (id) => {
        onChangeGuests(guests.filter((el, index) => id !== index))

    }

    const addGuest = (e) => {
        e.preventDefault();
        onChangeGuests([
            ...guests,
            {
                ...GUEST_INITIAL_STATE
            }
        ])

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
                    onClick={addGuest}
                    disabled={isDisabled}
                >
                    Add Guest
                </Button>

            </div>

        </div>
    )
};

export default GuestList;