import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap"
// import "./contact.scss";
// import "./../Home/home.scss"

function Contact() {

    const [name, setName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`)
    }


    return (
        <>
            <article>
                <h1> Contact form </h1>
                <h2>
                    Please complete the form below so we can forward your contact request
                    to Julius Githinji:
                </h2>
                <Form
                    id="my-form"
                    action="https://formspree.io/f/mnqwbple"
                    method="POST"
                    onSubmit={handleSubmit}
                >
                    
                        <h1> Hi Julius, </h1>
                        <div className="info">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>I am </Form.Label>
                                <Form.Control type="text" value={name} maxlength="96" placeholder="First Name and Last Name" onChange={(e) => setName(e.target.value)} required />
                            </Form.Group>
                            <div> from </div>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Company Name</Form.Label>
                                <Form.Control type="text" value={companyName} maxlength="100" placeholder="Company's name(optional)" onChange={(e) => setCompanyName(e.target.value)}/>
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
                                    <Form.Control type="email" value={phoneNumber} placeholder="" onChange={(e) => setPhoneNumber(e.target.value)} />
                                </Form.Group>
                            </div>
                            <div className="right">
                                <div> Looking forward to hearing from you! </div>
                                <div className="fullName"> First Name Last Name </div>
                                <Button variant="dark" type="submit">
                                    Submit
                                </Button>
                                <div id="status"> </div>
                            </div>
                        </div>
                </Form>
            </article>
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
