import React, { useRef } from "react";
import './WorkExperience.css'
import { WORK_EXPERIENCE } from "../../utils/data";
import ExperienceCard from "./ExperienceCard";
import Slider from "react-slick";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const WorkExperience = () => {
    const sliderRef = useRef();
    const settings = {
        dots:false,
        infinite:true,
        speed:500,
        slidesToShow:2,
        slidesToScroll:1,
        arrows:false,
        responsive: [
            {
                breakpoint:769,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow:1,
                },
            },
        ],
    }
    
    const SlideRight = () => {
        sliderRef.current.slickNext();
    }

    const SlideLeft = () => {
        sliderRef.current.slickPrev();
    }

    return (
       <section className="experience-container">
        <h5>Work Experience</h5>
        <div className="arrow-right" onClick={SlideRight}>
        <IoIosArrowDroprightCircle className="right" />
        </div>
        <div className="arrow-left" onClick={SlideLeft}>
        <IoIosArrowDropleftCircle  className="left" />
        </div>
        <div className="experience-content">
            <Slider ref={sliderRef} {...settings}>
            {WORK_EXPERIENCE.map((item) => (
                <ExperienceCard key={item.title} details={item}/>
            ))}
            </Slider>
        </div>
       </section>
    )
}
export default WorkExperience;