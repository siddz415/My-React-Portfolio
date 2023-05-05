import React from "react";
import '../styles/Resume.css';

export default function myResume() {
    return ( // added link to my resume in an a tag
        <div className="resume-container">
            <h1 className="title">Resume</h1>

            <a className="link" href="https://1drv.ms/w/s!ApJ2G3hFpYnujWvs9AQOc0D6gj3g?e=zICNe7">Download Resume</a>
        </div>
    )
}
