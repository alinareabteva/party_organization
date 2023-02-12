import React, { useMemo } from "react";
import "./Overview.scss";

const CURENT_DATE = new Date().getYear();
const getAge = (birthDate) => {
    return CURENT_DATE - (new Date(birthDate).getYear());
}

const Overview = ({ guests }) => {    

    const typesOfAlcohol = useMemo(() => {
        return guests.reduce((uniqueAlcohol, guest) => {
            const uniquePerGuest = guest.alcohol.filter(el => !uniqueAlcohol.includes(el))
            uniqueAlcohol.push(...uniquePerGuest);
            return uniqueAlcohol;
        }, [])
    }, [guests]);

   
    const overviewData = useMemo(() => {
        return guests.reduce((acc, cur) => {
            const guestAge = getAge(cur.birthDate);
            if (guestAge < 20) {
                acc.youngerThan20++;
            }
            if (guestAge > 30) {
                acc.olderThan30++
            }

            if (guestAge >= 20 && guestAge <=30) {
                acc.betweenYear++
            }
            
            return acc;
        }, {
            youngerThan20: 0,
            olderThan30: 0,
            betweenYear: 0
        })
    }, [guests])

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
                    <div className="item">{overviewData.youngerThan20}</div>
                    <div className="item">Number of people between 20 and 30 years</div>
                    <div className="item">{overviewData.betweenYear}</div>
                    <div className="item">Number of people older than 30</div>
                    <div className="item">{overviewData.olderThan30}</div>
                </div>
            </div>           
        </div>
    )
};

export default Overview;