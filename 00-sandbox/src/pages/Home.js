import React from 'react';
import '../styles/Home.css';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EmailIcon from '@mui/icons-material/Email';
import myPic from "../assets/myPic.png";
export default function Home() {
  return (
    <div className="home">
    <div className="about">
      <h3> Hi, My Name is Siddharth Dravid</h3>
      <img src={myPic} alt="pic" />

      <div className="pro">
        <p>Full Stack Web Developer experienced in creating mobile applications and websites.</p>
        
        {/* <LinkedInIcon />
        <EmailIcon />
        <GitHubIcon /> */}
      </div>
    </div>
    <div className="skills">
      <h1> Skills </h1>
      <ol className="list">
      <li className="item">
        <h2> Front-End</h2>
        <span>
          HTML, CSS, JavaScript, API's, JQuery, JSON.
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
