import React from "react";
import "./ourfarm.css";
import bg from "./ourfarm.jpg";
export function Ourfarm(){
    return(
        <div>
            
            <div className="container-fluid ">
                <div className="row">
                    
                <div className="col-lg-6 col-12 pr-0 pl-0">
                <img src={bg} className="ourfarmcontent"/>
                </div>
                <div className="col-lg-6 col-12 bg-white boxfarm text-center">
                    
                    <h2 className="happy3">ORGANIC FARM</h2>
                    <h3 className="happy2">Our Promise</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum neque temporibus enim reprehenderit minus libero, omnis doloribus et a impedit obcaecati consequatur modi laudantium.</p>
                    <button className="btn btn-warning text-white">Learn More</button>
                </div>
                
                </div>

            </div>

        </div>
    );
}