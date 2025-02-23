import React from "react";
import './ContactMe.css'
import ContactInfoCard from "./ContactInfoCard";
import ContactForm from "./ContactForm"

const ContactMe = () => {
    return (
        <section className="contact-container">
            <h5>Contact Me</h5>
            <div className="contact-content">
            <div style={{flex:1}}>
                <ContactInfoCard
                iconUrl = "./Images/Email.png"
                text="shirishasiri78160@gmail.com"/>
                <ContactInfoCard
                iconUrl = "./Images/github.png"
                text="shirishasiri78160@gmail.com"/>
            </div>
            <div style={{flex:1}}>
                <ContactForm/>
            </div>
            </div>
        </section>
    )
}

export default ContactMe;