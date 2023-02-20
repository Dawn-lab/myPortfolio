import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap"
import 'react-phone-number-input/style.css'
import PhoneInput, { isPossiblePhoneNumber, isValidPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {

    const [name, setName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const notify = () => {
        // toast("Form submitted successfully👍");
        toast.info("Form submitted successfully👍", {
            position: toast.POSITION.BOTTOM_CENTER
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`)
    }


    return (
        <>
            <Form
                id="my-form"
                method="POST"
                onSubmit={handleSubmit}
            >

                <h4> Hi Julius, </h4>
                <div className="info">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>I am </Form.Label>
                        <Form.Control type="text" value={name} maxLength="96" placeholder="First Name and Last Name" onChange={(e) => setName(e.target.value)} required />
                    </Form.Group>
                    <div> from </div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control type="text" value={companyName} maxLength="100" placeholder="Company's name(optional)" onChange={(e) => setCompanyName(e.target.value)} />
                    </Form.Group>
                </div>
                <div> and I'm contacting you to *: </div>
                <div className="smaller">
                    Please state reason(s) why you 're reaching out:
                </div>
                <div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Message goes here</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </div>
                <div className="complete">
                    <div className="contacts">
                        <div className="input-box">
                            <div className="q">
                                <div className="why" id="hidden">
                                    We ask for your contact info to enable communication
                                    between You and Julius. We will never share it with 3 rd
                                    party sources.
                                </div>
                            </div>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address * </Form.Label>
                                <Form.Control type="email" required value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} placeholder="name@example.com" />
                            </Form.Group>
                        </div>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone Number</Form.Label>
                            <PhoneInput
                                placeholder="Enter phone number"
                                value={phoneNumber}
                                onChange={(value) => setPhoneNumber(value)} />
                            {
                                phoneNumber && isPossiblePhoneNumber(phoneNumber) && isValidPhoneNumber(phoneNumber) ? `This is a valid phone number with its international format as ${formatPhoneNumberIntl(phoneNumber)}` : "This is not a valid phone number!"
                            }
                        </Form.Group>
                    </div>
                    <div className="right">
                        <div> Looking forward to hearing from you! </div>
                        <div className="fullName"> First Name Last Name </div>
                        <div>
                            <Button variant="dark" type="submit" onClick={notify}>
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
                    <span className="git">
                        <img src="./assets/svg/github.svg" alt="" />
                    </span>
                    <span className="twitter">
                        <img src="./assets/svg/twitter-color.svg" alt="" />
                    </span>
                    <span className="linkedin">
                        <img src="./assets/svg/linkedin-square-color.svg" alt="" />
                    </span>
                </div>
                & copy; Julius Githinji• 2023
            </footer>
        </>
    );
}

export default Contact;
