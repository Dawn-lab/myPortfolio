import React from "react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Button, Form } from "react-bootstrap"
import 'react-phone-number-input/style.css'
import PhoneInput, { isPossiblePhoneNumber, isValidPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {

    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const form = useRef();
    // require('dotenv').config();
    // const Dotenv = require('dotenv-webpack');


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm( process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                // e.target.reset()
                // alert(`The name you entered was: ${name}`)
                // Resetting the form on submission
                setName('')
                setSubject('')
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
                    <div> with the following Subject </div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        {/* <Form.Label>Subject</Form.Label> */}
                        <Form.Control type="text" value={subject} name="subject" maxLength="150" placeholder="Subject" onChange={(e) => setSubject(e.target.value)} />
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
                    <div className="right justify-content-between d-flex">
                        <div className="fullName"> Thank you <span>{!`${name}` ? "..." : `${name}`}, </span> Julius will get back to you in a few</div>
                        <div>
                            <Button className="button"  variant="dark" type="submit" value="send" onClick={notify}>
                                Submit
                            </Button>
                            <ToastContainer />
                        </div>
                    </div>
                        <div id="status"> </div>
                </div>
            </Form>
            
        </>
    );
}

export default Contact;
