import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/avatar.jpg";
import { Instagram, LinkedIn, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the developer</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Yashraj Kanake</h3>
                        <p>Full Stack developer</p>
                        <p>Competitive Coder</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>A Computer Science and Engineering Student at DYPIT Pune</p>
                    <p>Graduating in 2025 and looking for a responsible position to gain practical knowledge</p>
                    <p>A full-stack web developer and a Competitive coder.</p>
                    <p>I love designing fully responsive websites.</p>
                    <p>I have a keen interest in developing projects, whenever I want to learn something new.</p>
                    <p>And a blogger.</p>
                    <div className="Card-btn">
                        
                        
                        <IconButton target={"_blank"} href={"https://twitter.com/kanake_yashraj"}  title={"kanake_yashraj"}>
                            <Twitter/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.linkedin.com/in/yashraj-kanake/"}  title={"yashraj-kanake"}>
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com/yashraj_005/"}  title={"yashraj_005"}>
                            <Instagram/>
                        </IconButton>
                        
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;