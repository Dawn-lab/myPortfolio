import React, { useState, useEffect, useRef } from "react";
import "./home.scss";
import foto from "./../../IMG_20220331_123215-removebg-preview.png";
import splash from "./../../luca-nicoletti-O8CHmj0zgAg-unsplash-removebg-preview.png";

function App() {
    const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

    const eyeLeft = useRef();
    const eyeRight = useRef();

    const eyeBrowLeft = useRef();
    const eyeBrowRight = useRef();

    function calcAngle(element) {
        if (!element.current) return;

        let elX = element.current.offsetLeft + element.current.clientWidth / 2;
        let elY = element.current.offsetTop + element.current.clientHeight / 2;

        var rad = Math.atan2(mouseCoordinates.x - elX, mouseCoordinates.y - elY);
        var rot = rad * (180 / Math.PI) * -1 + -18;

        return rot;
    }

    const handleMouseMove = (event) => {
        setMouseCoordinates({ x: event.clientX, y: event.clientY });

        eyeBrowLeft.current.style.transform = `translateY(${event.clientY / 50}px)`;
        eyeBrowRight.current.style.transform = `translateY(${event.clientY / 50
            }px)`;
    };

    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <React.Fragment>
            <div className="home-page">
                <div className="image-wrapper">
                    <img className="image" src={foto} alt=""></img>
                    <img className="splash" src={splash} alt=""></img>
                </div>
                <div className="app">
                    {/* <h2>This is the home page</h2> */}
                    <div className="intro">
                        <h1 className="name">IRUNGU G.</h1>
                        <h3>Hello_</h3>
                        <h2>I'm a Software Developer</h2>
                        <p>
                            A full Stack developer with incredible skills in creating successful websites that meet customer needs. I am proficient enough in NodeJS, ReactJs, MongoDB, TypeScript/JavaScript; well-versed in design standards and user preferences.
                        </p>
                        <div className="btns">
                            <button className="btn">Download Resume</button>
                            <button className="btn">Hire me</button>
                        </div>
                    </div>
                    <div className="images apps brows">
                        <div className="eyebrow_container">
                            <div ref={eyeBrowLeft} className="eye_brow left"></div>
                            <div ref={eyeBrowRight} className="eye_brow right"></div>
                        </div>
                        <div className="eye_container">
                            <div
                                ref={eyeLeft}
                                style={{
                                    transform: `rotate(${calcAngle(eyeLeft)}deg)`,
                                }}
                                className="eye"
                            ></div>
                            <div
                                ref={eyeRight}
                                style={{
                                    transform: `rotate(${calcAngle(eyeRight)}deg)`,
                                }}
                                className="eye"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;
