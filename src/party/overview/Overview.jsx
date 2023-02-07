import React from "react";
import Button from "../components/button/Button";
import Guest from "../guest/Guest";
import GuestList from "../guest/GuestList";
import "./Overview.scss";


const Overview = () => {

    
    return (
        <div className="overview">
            <h2 className="overviewLabel">Overview:</h2>
            <div className="overviewContainer">
                <div className="wrapper">
                    <div className="item">Types of alcohol:</div>
                    <div className="item">Two</div>
                    <div className="item">Quantity of boys:</div>
                    <div className="item">Four</div>
                    <div className="item">Quantity of girls:</div>
                    <div className="item">six</div>
                    <div className="item">Number of people who don't drink</div>
                    <div className="item">eight</div>
                </div>
            </div>
            <div className="submitForm">
                <Button>Submit</Button>
            </div>
        </div>
    )
};

export default Overview;