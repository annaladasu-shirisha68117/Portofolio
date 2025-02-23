import React from "react";
import './ExperienceCard.css';

const ExperienceCard = ({ details }) => {
    const Experience = details.responsibilties;
    return (
        <div className="work-experience-card">
            <h6>{details.title}</h6>
            <div className="work-duration">{details.date}</div>
            <ul>
                {Experience.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
export default ExperienceCard;