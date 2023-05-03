import React from "react";
import GithubIcon  from '@material-ui/icons/Github';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="media">
                <GithubIcon/>
                <LinkedInIcon/>
                <EmailIcon/>
            </div>
        </div>
    )
}

export default Footer;