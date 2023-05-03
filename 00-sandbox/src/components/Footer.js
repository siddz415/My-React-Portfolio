import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="media">
                <GitHubIcon/>
                <LinkedInIcon/>
                <EmailIcon/>
            </div>
        </div>
    )
}

export default Footer;