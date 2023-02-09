import React, { useMemo, useState } from "react";
import Button from "../components/button/Button";
import Modal from "../components/modal/Modal"
import "./Overview.scss";


const Overview = ({ guests }) => {
    const [state, setState] = useState({
        isOpen: false,
    })

    const openModal = (e) => {
        e.preventDefault();
        setState({ isOpen: true });
    }

    const handleSubmit = () => {
        console.log('Yes function!');
        setState({ isOpen: false });
    }

    const handleCancel = () => {
        console.log('Cancel function!');
        setState({ isOpen: false });
    }

    const typesOfAlcohol = useMemo(() => {
        return guests.reduce((uniqueAlcohol, guest) => {
            const uniquePerGuest = guest.alcohol.filter(el => !uniqueAlcohol.includes(el))
            uniqueAlcohol.push(...uniquePerGuest);
            return uniqueAlcohol;
        }, [])
    }, [guests]);

    // new Date().getYear() -  new Date(guest.birthDate).getYear()


    return (
        <div className="overview">
            <h2 className="overviewLabel">Overview:</h2>
            <div className="overviewContainer">
                <div className="wrapper">
                    <div className="item">Types of alcohol:</div>
                    <div className="item">({typesOfAlcohol.length}): {typesOfAlcohol.join(", ")}</div>
                    <div className="item">Quantity of boys:</div>
                    <div className="item">{guests.filter(el => el.sex === "M").length}</div>
                    <div className="item">Quantity of girls:</div>
                    <div className="item">{guests.filter(el => el.sex === "F").length}</div>
                    <div className="item">Number of people who don't drink</div>
                    <div className="item">{guests.filter(el => el.alcohol.length === 0).length}</div>
                    <div className="item">Number of people who younger than 20</div>
                    <div className="item">jghj</div>
                    <div className="item">Number of people between 20 and 30 years</div>
                    <div className="item">nn</div>
                    <div className="item">Number of people older than 30</div>
                    <div className="item">nn</div>
                </div>
            </div>
            <div className="submitForm">
                <Button onClick={openModal}>Submit</Button>
                <Modal
                    title="The affirmation"
                    isOpen={state.isOpen}
                    onCancel={handleCancel}
                    onSubmit={handleSubmit}
                >
                    <p>
                        glugufu
                    </p>
                </Modal>

            </div>
        </div>
    )
};

export default Overview;