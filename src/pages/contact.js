import React from "react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Button, Form } from "react-bootstrap"
// import Alert from 'react-bootstrap/Alert';
import 'react-phone-number-input/style.css'
import PhoneInput, { isPossiblePhoneNumber, isValidPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
// import NavLink from "react-bootstrap";
import { NavLink } from "react-router-dom"
// import github from '../assets/github-icon-1.svg'

function Contact() {

    const [name, setName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_13rqegh', 'template_2bu6sye', form.current, 'rvpDnRFjdCaR3M3by')
            .then((result) => {
                console.log(result.text);
                // e.target.reset()
                // alert(`The name you entered was: ${name}`)

                // Resetting the form on submission
                setName('')
                setCompanyName('')
                setEmailAddress('')
                setPhoneNumber('')
            }, (error) => {
                console.log(error.text);
            });
    };

    const notify = () => {
        if (name && emailAddress) {
            toast.info("Form submitted successfully👍", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        } else {
            alert("Please fill the names and email address fields to submit!")
            // <Alert variant="danger">
            //     Please fill the names and email address fields to submit!
            // </Alert>
        }
    }


    return (
        <>
            <Form
                ref={form}
                id="my-form"
                method="POST"
                onSubmit={sendEmail}
            >

                <h4> Hi Julius, </h4>
                <div className="info">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>I am </Form.Label>
                        <Form.Control type="text" value={name} maxLength="96" name="user_name" placeholder="First Name and Last Name" onChange={(e) => setName(e.target.value)} required />
                    </Form.Group>
                    <div> from </div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control type="text" value={companyName} name="user_company" maxLength="100" placeholder="Company's name(optional)" onChange={(e) => setCompanyName(e.target.value)} />
                    </Form.Group>
                </div>
                <div> and I'm contacting you to: </div>
                {/* <div className="smaller">
                    Please state reason(s) why you are reaching out:
                </div> */}
                <div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Message goes here</Form.Label>
                        <Form.Control as="textarea" name="message" rows={3} />
                    </Form.Group>
                </div>
                <div className="complete">
                    <div className="contacts">
                        <div className="input-box">
                            <div className="q">
                                <div className="why" id="hidden">
                                    We ask for your contact info to enable communication
                                    between You and Julius.
                                </div>
                            </div>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address * </Form.Label>
                                <Form.Control type="email" name="user_email" required value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} placeholder="name@example.com" />
                            </Form.Group>
                        </div>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone Number</Form.Label>
                            <PhoneInput
                                placeholder="Enter phone number"
                                value={phoneNumber}
                                name="user_number"
                                onChange={(value) => setPhoneNumber(value)} />
                            {
                                phoneNumber && isPossiblePhoneNumber(phoneNumber) && isValidPhoneNumber(phoneNumber) ? `This is a valid phone number with its international format as ${formatPhoneNumberIntl(phoneNumber)}` : "This is not a valid phone number!"
                            }
                        </Form.Group>
                    </div>
                    <div className="right">
                        <div className="fullName"> Thank you {!`${name}` ? "..." : `${name}`} </div>
                        <div> Julius will get back to you in a few</div>
                        <div>
                            <Button variant="dark" type="submit" value="send" onClick={notify}>
                                Submit
                            </Button>
                            <ToastContainer />
                        </div>
                        <div id="status"> </div>
                    </div>
                </div>
            </Form>
            <footer>
                <div className="socials">
                    <NavLink to="https://github.com/Dawn-lab" as={NavLink}>

                    </NavLink>
                    <span className="git">
                        {/* <img src={github} alt="" /> */}
                        <Button variant="none"><FaGithub /></Button>
                    </span>
                    <NavLink to="https://twitter.com/Julieus_G" as={NavLink}>

                        <span className="twitter">
                            {/* <img src="./assets/svg/twitter-color.svg" alt="" /> */}
                            <Button variant="none"><FaTwitter /></Button>
                        </span>
                    </NavLink>
                    <NavLink to="https://www.linkedin.com/in/julieus/" as={NavLink}>

                        <span className="linkedin">
                            {/* <img src="./assets/svg/linkedin-square-color.svg" alt="" /> */}
                            <Button variant="none"><FaLinkedinIn /></Button>
                        </span>
                    </NavLink>
                </div>
                Julius Githinji • 2023
            </footer>
        </>
    );
}

export default Contact;
