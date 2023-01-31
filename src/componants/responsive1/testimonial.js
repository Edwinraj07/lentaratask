import React from "react";
import testmonials from "./testimonials.jpg";
import "./testimonials.css";
export function Testimonials(){
    return(
        <div>
            
        <div className="container-fluid bg">
            <div className="row">
                <div className="col-lg-6 col-12 pr-0 pl-0">
                    <img src={testmonials} className="testi"/>

                </div>
                <div className="col-lg-6 col-12 text-center testicon">
                <h4 className="happy1">Happy Farming</h4>
                    <h3 className="happy">Happy Animals</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ipsum neque temporibus enim reprehenderit minus libero, omnis doloribus et a impedit obcaecati consequatur modi laudantium.</p>
                    <button className="btn btn-warning text-white">Learn More</button>
                </div>

            </div>
        </div>
        </div>
    );
}