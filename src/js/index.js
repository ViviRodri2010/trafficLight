//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

const lightClicked = (e) => {
    setActiveLight(e.target.className);
}


const classNames = ["red", "yellow", "green"];

const activeLights = [0, 0, 0];

const setActiveLight = (className) => {
    for(let i = 0; i < activeLights.length; i++){
        activeLights[i] = classNames[i] == className ? activeLights[i] = 1 : activeLights[i] = 0;
    }
    rend();
}

function doLights(value){
    return value == 1 ? "lit" : "";
}
window.onload = rend();
function rend(){
    
    ReactDOM.render(
    <>
    
        <div className="PALO"></div>
        <div className="lights">
            <div className="light">
                <div className="red" id={doLights(activeLights[0])} onClick={lightClicked}></div>
            </div>
            <div className="light">
                <div className="yellow" id={doLights(activeLights[1])} onClick={lightClicked}></div>
            </div>
            <div className="light">
                <div className="green" id={doLights(activeLights[2])} onClick={lightClicked}>
            </div></div>
            
        </div>
        
    </>, document.querySelector("#app"));
}

