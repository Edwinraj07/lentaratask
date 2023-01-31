import React from "react";
import "./organic.css";
import organic from "./organic1.png";
export function Organic(){
    return(
        <div>
            
            <div className="container-fluid text-center">
            <div className="row">
                <div className="col-lg-6 col-12 p-5 organiccontent">
                <h4 className="happy1">Happy Farming</h4>
                    <h3 className="happy">Organic Foods</h3>
                    <p>Natural climate solutions are conservation, restoration and improved land management actions that increase carbon storage or avoid greenhouse gas emissions in landscapes and wetlands across the globe Natural climate solutions are conservation, restoration and</p>
                    <button className="btn btn-warning text-white">Learn More</button>
                    

                </div>
                <div className="col-lg-6 col-12 text-center pr-0 pl-0 mt-2">
                <img src={organic} className="testi"/>
                </div>

            </div>
        </div>

        </div>
    );
}