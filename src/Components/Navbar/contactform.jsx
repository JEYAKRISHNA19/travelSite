import React from 'react';
import './contactform.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
    const navigate = useNavigate(); // Use the useNavigate hook

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        formData.append("access_key", "e503c5c6-e456-47e5-bdde-e4707a93472e");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Thank You!",
                text: "Your Message sent Successfully!",
                icon: "success"
            }).then(() => {
                // Redirect to the home page after the alert is closed
                navigate('/');
            });
        } else {
            Swal.fire({
                title: "Error!",
                text: "Something went wrong, please try again.",
                icon: "error"
            });
        }
    }

    return (
        <section className='contact'>
            <form onSubmit={onSubmit}>
                <h2>Contact Form</h2>
                <div className="input-box">
                    <label>Full Name</label>
                    <input type="text" className="field" placeholder='Enter your Name' name="name" pattern="[A-Za-z\s]+" required />
                </div>
                <div className="input-box">
                    <label>Email Address</label>
                    <input type="email" className="field" placeholder='Enter your Email' name="email" required />
                </div>
                <div className="input-box">
                    <label>Phone</label>
                    <input type="number" className="field" placeholder='Enter your contact number' name="number" pattern="[6-9][0-9]{9}" required />
                </div>
                <div className="input-box">
                    <label>Message</label>
                    <textarea name="message" className="field mess" placeholder='Elaborate your convenience here' required />
                </div>
                <button type="submit">Submit Form</button>
            </form>
        </section>
    )
}

export default ContactForm;
