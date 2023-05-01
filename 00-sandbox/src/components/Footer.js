import React from "react";
import githubIcon  from '@material-ui/icons/Github';
import linkedInIcon from '@material-ui/icons/LinkedIn';
import emailIcon from '@material-ui/icons/Email';
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="media">
                <githubIcon/>
                <linkedInIcon/>
                <emailIcon/>
            </div>
        </div>
    )
}

export default Footer;