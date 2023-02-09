import React, { useEffect, useRef } from "react";
import Input from "../components/input/Input";
import Select from "../components/select/Select";
import Icon, { IconNames, IconSizes } from "../components/icon/icon";
import { alcoholOptions } from "./Data";
import "./Guest.scss";

const Guest = ({ guest, index, handleGuestChange, onClickDelete, onAlcoholChange, isLastItem }) => {
    const ref = useRef(null)
    const handleChange = ({ target: { name, value } }) => {
        handleGuestChange(index, name, value)
    }

    const handleRadioBtnChange = ({ target: { value } }) => {
        handleGuestChange(index, 'sex', value)
    }

    useEffect(() => {
        if (isLastItem && ref.current) {
            ref.current.scrollIntoView({
                behavior: "smooth"
            })
        }
    }, [ref, isLastItem])

    return (
        <div className="guest-wrapper" ref={ref}>
            <div className="box">
                <Icon onClick={() => onClickDelete(index)} size={IconSizes.medium} name={IconNames.Close} />
                <div className="row">
                    <Input name="firstName" label="First Name:" placeholder="First Name" type="text" value={guest.firstName} onChange={handleChange} />
                </div>
                <div className="row">
                    <Input name="lastName" label="Last Name:" placeholder="Last Name" type="text" value={guest.lastName} onChange={handleChange} />
                </div>
                <div className="row">
                    <Input name="birthDate" label="Birth Date:" type="date" value={guest.birthDate} onChange={handleChange} />
                </div>
                <div className="row sex">
                    <label className="labelSex">Sex:</label>
                    <Input
                        name={`guest[${index}].sex`}
                        label="M"
                        value="M"
                        type="radio"
                        checked={guest.sex === "M"}
                        onChange={handleRadioBtnChange}
                    />
                    <Input
                        name={`guest[${index}].sex`}
                        label="F"
                        value="F"
                        type="radio"
                        checked={guest.sex === "F"}
                        onChange={handleRadioBtnChange}
                    />
                </div>
                <div className="row select">
                    <label className="labelAlcohol">Alcohol:</label>
                    <Select allowMultiple onChange={(alcohol) => onAlcoholChange(index, alcohol)} options={alcoholOptions} selectedOptions={guest.alcohol} />
                </div>

            </div>
        </div>
    );
}

export default Guest;