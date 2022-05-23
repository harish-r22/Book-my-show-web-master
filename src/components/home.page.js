import React, { Component } from "react";
import "../App.css";
import image0 from "./Images/music-festival.jpg";
import image1 from "./Images/enrique.jpg";
import image2 from "./Images/bts.jpeg";
import image3 from "./Images/arijit.jpg";
import image4 from "./Images/mltr.jpg";


export default class Tutorial extends Component {
    render(){
        return(
            <div>
            <h1 >EVENT</h1>
            <div id ="main-page">
                <img src={image0} alt="festival"/>
                <img src={image1} alt="enrique"/>
                <img src={image2} alt="bts"/>
                <img src={image3} alt="bts"/>
                <img src={image4} alt="bts"/>
            </div></div>
        )
    }
}