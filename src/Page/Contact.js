import React from "react";
import { Component } from "react";

class Contact extends Component {
    render(){
        return(
            <div className="Contact">
                <h1>Contact</h1>
                <hr/>
                <ul>
                    <li className="list-contact">
                        <h4>Social Media</h4>
                        <a href="https://www.instagram.com/panggilreyae/" target="_blank" className="contact-link">Instagram</a><br/>
                        <a href="https://github.com/ghostre17" target="_blank" className="contact-link">Github</a><br/>
                    </li>
                    <li className="list-contact">
                        <h4>Email</h4>
                        <a href="mailto:rere.ghostre17@gmail.com" target="_blank" className="contact-link">rere.ghostre17@gmail.com</a>
                    </li>
                    <li className="list-contact">
                        <h4>Number</h4>
                        <a href="https://wa.me/6285784567949" target="_blank" className="contact-link">+6285784567949</a>
                    </li>
                    <li className="list-contact">
                        <h4>Discord</h4>
                        <a href="https://discordapp.com/users/ghostre#2724" target="_blank" className="contact-link">ghostre#2724</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Contact;
