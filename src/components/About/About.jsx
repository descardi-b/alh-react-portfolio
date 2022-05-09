import React from 'react';
import "./about.scss"
import { useEffect, useRef } from 'react';
import { init } from 'ityped'


function About() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["spacex", "rapid7", "bluevoyant", "boeing"],
        });

    }, []);

    return (
        <div className="about" id="about">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/alh-headshot.png" alt="alh headshot" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1>alex lin</h1>
                    <p>4+ years of experience in the tech and space industries.
                    </p>
                    <p>
                        providing strategic messaging solutions for:
                    </p>
                    <p>
                        <h3><span ref={textRef}></span></h3>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;