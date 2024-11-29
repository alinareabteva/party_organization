import React from "react";
import Button from "../button/Button";
import "./SubmitButton.scss"

const SubmitButton = ({onClick, disabled}) => {

    return (
        <div className="submitForm">
            <Button onClick={onClick} disabled={disabled}>Submit</Button>
        </div>
    )
}
export default SubmitButton;