import { useRef } from "react";
import "./Main.css";
import Skills from "../Skills/Skills";
import WorkExperience from "../WorkExperience/WorkExperience";
import ContactMe from "../ContactMe/ContactMe";

const Main = () => {
  return (
    <>
      <section className="main-container">
        <div className="Flex-div">
          <div className="main-content">
            <h2>A Front-End Web Developer is a tech </h2>
            <p>
              professional who builds the user-facing part of websites that
              customers interact with daily.
            </p>
          </div>
          <div className="main-img">
            <div>
              <div className="tech-icon">
                <img src="./Images/reactjs.png" width="80" alt="" />
              </div>
              <img src="./Images/Devgirl.png" alt="" className="shadow" />
            </div>
            <div>
              <div className="tech-icon">
                <img src="./Images/java-script.png" width="80" alt="" />
              </div>
              <div className="tech-icon">
                <img src="./Images/html.png" width="80" alt="" />
              </div>
              <div className="tech-icon">
                <img src="./Images/css.png" width="80" alt="" />
              </div>
            </div>
          </div>
        </div>
        <Skills />
        {/* <WorkExperience/> */}
        <ContactMe />
      </section>
    </>
  );
};
export default Main;
