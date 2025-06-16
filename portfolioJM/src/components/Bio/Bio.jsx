import React from "react";
import "./Bio.css";
import MyPhoto from "../../assets/images/photoOne.jpg";
import Githubphoto from "../../assets/images/Github.png";
import linked from "../../assets/images/linkedIn.png";


const Bio = () => {
    return (
        <div className="bio-container">
            
            <div className="photo-container">
                <img src={MyPhoto} alt="My image"width="475" height="350"></img>
            </div>

            <div className="bio-content">
                
                <h2>Full Stack Developer and Student <br></br> Specializing in Back-end Development <br></br>
                Indianapolis, Indiana</h2>

                <div className="social-links">
                    <a href="https://github.com/Jmcdaniels7/ProjectsJM.git">
                        <img src={Githubphoto} alt="GitHub"width="60" height="25"></img>
                    </a>
                
                    <a href="https://www.linkedin.com/in/jacob-mcdaniels-6b31322ab/">
                        <img src={linked} alt="GitHub"width="75" height="20"></img>
                    </a>

                </div>
                
                <div className="skills">
                    <h2>Skills</h2>
                    <h4>Languages: Python, Java, C++, SQL, TypeScript, JavaScript, HTML5, CSS</h4>
                    <h4>Frameworks/Libraries: Django, Flask, Node.js, React, Angular, Spring Boot, Javalin, pandas</h4>
                    <h4>Databases: PostgreSQL, SQLite, CosmosDB, Oracle</h4>
                    <h4>Tools: Microsoft Azure, Postman, Docker, Anaconda, GitHub Copilot</h4>
                </div>
                
                
            </div>
        </div>

    )
}

export default Bio;