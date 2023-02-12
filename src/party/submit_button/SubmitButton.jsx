import React from "react";
import Button from "../components/button/Button";
import "./SubmitButton.scss"

const SubmitButton = ({onClick}) => {

    return (
        <div className="submitForm">
            <Button onClick={onClick}>Submit</Button>
        </div>
    )
}
export default SubmitButton;