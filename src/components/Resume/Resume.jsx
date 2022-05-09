import React from 'react';
import "./resume.scss"


function Resume() {

    return (
        <div className="resume" id="resume">
            <h2>Resume</h2>
            <p><a href="https://alexandra-lin.com/assets/alexandra-holden-resume.pdf">download here</a></p>
            <p>Content strategist leading with narratives, collaboration, and data-driven results. 4+ years of experience in media consulting, strategy, and communications.
                Works featured with Smithsonian Institute, Delta, Boeing,
                Netflix, AppleTV+, and SpaceX. Passionate
                about space exploration, tech, coding,
                UAPs, and multiverses.</p>
            <h3>Full Stack Development Experience</h3>
            <p>As a developer trained in the UC Berkeley Full Stack Development Bootcamp, I'm proficient in the following technologies:</p>
            <ul>
                <li>HTML / CSS</li>
                <li>JavaScript / JQuery</li>
                <li>MongoDB / Express.js / React / Node.js</li>
                <li>MySQL / Sequelize</li>
                <li>Mongoose</li>
            </ul>
            <p>
                <div className='academy-badge'>
                    <a href='http://academy.hubspot.com/certification' title='Social Media Marketing'>
                        <img src='https://hubspot-credentials-na1.s3.amazonaws.com/prod/badges/user/9b5a73ce1d114689b7fba9fe9dcd5b73.png' />
                    </a>
                </div>

                <div class='academy-badge'>
                    <a href='http://academy.hubspot.com/certification' title='Inbound Marketing'>
                        <img src='https://hubspot-credentials-na1.s3.amazonaws.com/prod/badges/user/c631a7a182fd485d91c74056512fe9fe.png' />
                    </a>
                </div>
            </p>
        </div>
    );
}

export default Resume;