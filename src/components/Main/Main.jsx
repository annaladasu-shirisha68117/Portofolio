import React from "react";
import './Main.css'

const Main = () =>{
    return (
        <>
        <section className="main-container">
            <div className="main-content">
                <h2>A Front-End Web Developer is a tech </h2>
                <p>
                industry professional who builds the front portion of websites that customers, guests, or clients use on a daily basis.
                </p>
            </div>
            <div className="main-img">
                <div>
                    <div className="tech-icon">
                        <img src="./Images/reactjs.png" width="80"alt=""/>
                    </div>
                    <img src="./Images/Devgirl.png" alt=""/>
                </div>
<div>
    <div className="tech-icon">
        <img src="./Images/java-script.png" width="80" alt=""/>
    </div>
    <div className="tech-icon">
        <img src="./Images/html.png" width="80" alt=""/>
    </div>
    <div className="tech-icon">
        <img src="./Images/css.png" width="80" alt=""/>
    </div>
</div>
            </div>
        </section>
        </>
    )
}
export default Main;
