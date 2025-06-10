import React from "react";
import "./Bio.css";
import MyPhoto from "../../assets/images/photoOne.jpg";


const Bio = () => {
    return (
        <div class="bio-container">
            <div class="wrapper"> 

                <div class="photo-container">
                    <img src={MyPhoto} alt="My image"width="275" height="180"></img>
                </div>

            </div>
            
        </div>

    )
}

export default Bio;