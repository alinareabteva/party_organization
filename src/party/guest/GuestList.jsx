import React from "react";
import Guest from "./Guest";
import Button from "../components/button/Button";

const GuestList = () => {

    return (
        <div className="guests">
             <h2 id="guests">Guests:</h2>
             {/* TODO: render list of guests */}
             <Guest />
             <div className="row">
                <Button >Add Guest</Button>
            </div>
        </div>
    )
};

export default GuestList;