import React from "react";
import "./contact.scss"

function Contact() {
    return (
        <>
            <article>
                <h1> Contact form </h1>{" "}
                <h2>
                    Please complete the form below so we can forward your contact request
                    to Julius Githinji:
                </h2>{" "}
                <form
                    id="my-form"
                    action="https://formspree.io/f/mnqwbple"
                    method="POST"
                >
                    <div class="container">
                        <h1> Hi Julius, </h1>{" "}
                        <div class="info">
                            <div> I am </div>{" "}
                            <div class="input-box">
                                <div class="small"> First Name and Last Name * </div>{" "}
                                <input
                                    maxlength="96"
                                    placeholder="First Name Last Name"
                                    type="text"
                                    value=""
                                    name="fullName"
                                    required
                                />
                            </div>{" "}
                            <div> from </div>{" "}
                            <div class="input-box">
                                <div class="small"> Company Name </div>{" "}
                                <input
                                    maxlength="100"
                                    placeholder="Company Name"
                                    type="text"
                                    value=""
                                    name="companyName"
                                />
                            </div>{" "}
                        </div>{" "}
                        <div> and I’ m contacting you to *: </div>{" "}
                        <div class="smaller">
                            Please state reason(s) why you 're reaching out:{" "}
                        </div>{" "}
                        <div>
                            <legend>
                                <label for="message"> Your Message goes below </label>{" "}
                                {/* <br> */}{" "}
                                <textarea
                                    class="message"
                                    name="message"
                                    id="someText"
                                    required
                                ></textarea>{" "}
                            </legend>{" "}
                        </div>{" "}
                        <div class="complete">
                            <div class="contacts">
                                <div class="input-box">
                                    <div class="q">
                                        ?
                                        <div class="why" id="hidden">
                                            We ask for your contact info to enable communication
                                            between You and Julius.We will never share it with 3 rd
                                            party sources.{" "}
                                        </div>{" "}
                                    </div>{" "}
                                    <div class="small"> Email address * </div>{" "}
                                    <input
                                        placeholder="Email address"
                                        type="text"
                                        value=""
                                        name="emailAddress"
                                        required
                                    />
                                </div>{" "}
                                <div class="input-box">
                                    <div class="small"> Phone number </div>{" "}
                                    <input
                                        maxlength="20"
                                        placeholder="Phone number"
                                        type="text"
                                        value=""
                                        name="number"
                                    />
                                </div>{" "}
                            </div>{" "}
                            <div class="right">
                                <div> Looking forward to hearing from you! </div>{" "}
                                <div class="fullName"> First Name Last Name </div>{" "}
                                <button class="btn" type="submit">
                                    {" "}
                                    SEND→{" "}
                                </button>{" "}
                                <div id="status"> </div>{" "}
                            </div>{" "}
                        </div>{" "}
                    </div>{" "}
                </form>{" "}
            </article>{" "}
            <footer>
                <div class="socials">
                    <span class="invert git">
                        <img src="./assets/svg/github.svg" alt="" />{" "}
                    </span>{" "}
                    <span class="twitter">
                        <img src="./assets/svg/twitter-color.svg" alt="" />{" "}
                    </span>{" "}
                    <span class="linkedin">
                        <img src="./assets/svg/linkedin-square-color.svg" alt="" />{" "}
                    </span>{" "}
                </div>{" "}
                & copy; Julius Githinji• 2022{" "}
            </footer>{" "}
        </>
    );
}

export default Contact;
