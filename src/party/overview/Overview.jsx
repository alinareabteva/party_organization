import React, { useMemo } from "react";
import "./Overview.scss";

const CURENT_DATE = new Date().getYear();

const Overview = ({ guests }) => {    

    const typesOfAlcohol = useMemo(() => {
        return guests.reduce((uniqueAlcohol, guest) => {
            const uniquePerGuest = guest.alcohol.filter(el => !uniqueAlcohol.includes(el))
            uniqueAlcohol.push(...uniquePerGuest);
            return uniqueAlcohol;
        }, [])
    }, [guests]);

    const getAge = (birthDate) => {
        return CURENT_DATE - (new Date(birthDate).getYear());
    }

    const betweenYear = useMemo(() => {
        return guests.reduce((acc, el) => {
            const guestAge = getAge(el.birthDate);
            if (guestAge >= 20 && guestAge <= 30) {
                acc++;
            }
            return acc;
        }, 0)
    }, [guests]);

    const youngerThan20 = useMemo(() => {
        return guests.reduce((acc, el) => {
            if (getAge(el.birthDate) < 20) {
                acc++;
            }
            return acc;
        }, 0)
    }, [guests]);

    const olderThan30 = useMemo(() => {
        return guests.reduce((acc, el) => {
            if (getAge(el.birthDate) > 30) {
                acc++;
            }
            return acc;
        }, 0)
    }, [guests]);

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
                    <div className="item">{youngerThan20}</div>
                    <div className="item">Number of people between 20 and 30 years</div>
                    <div className="item">{betweenYear}</div>
                    <div className="item">Number of people older than 30</div>
                    <div className="item">{olderThan30}</div>
                </div>
            </div>           
        </div>
    )
};

export default Overview;