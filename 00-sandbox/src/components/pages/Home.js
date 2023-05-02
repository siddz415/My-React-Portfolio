import React from 'react';
// import '../styles/Home.css';
import linkedInIcon from "@material-ui/icons/LinkedIn";
import emailIcon from '@material-ui/icons/Email';
import githubIcon from "@material-ui/icons/GitHub";
import myPic from "../assets/myPic.png";
export default function Home() {
  return (
    <div className="home">
    <div className="about">
      <h2> Hi, My Name is Siddharth Dravid</h2>
      <img src={myPic} alt="pic" />

      <div className="prompt">
        <p></p>
        
        <linkedInIcon />
        <emailIcon />
        <githubIcon />
      </div>
    </div>
    <div className="skills">
      <h1> Skills </h1>
      <ol className="list">
      <li className="item">
        <h2> Front-End</h2>
        <span>
          HTML, CSS, Git, JavaScript, The DOM, API's, JQuery, JSON.
        </span>
      </li>
      <li className="item">
        <h2>Back-End</h2>
        <span>
          NodeJS, ExpressJS, MySQL, MongoDB, Sequelize.
        </span>
      </li>
      <li className="item">
        <h2>Languages</h2>
        <span>
          JavaScript, HTML, CSS, Ruby.
        </span>
      </li>
      </ol>
    </div>
  </div>
);
}
