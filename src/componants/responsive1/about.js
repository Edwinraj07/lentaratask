import React from "react";
import "../responsive1/about.css";
import tomato from "../responsive1/tomato1.jpeg";
import cabbage from "../responsive1/bage.jpg";
import carrot from "../responsive1/carrot.jpg";
import beetroot from "../responsive1/beet.jpg";



export function About(){
    return(
       <div>
        <div className="aboutcontent">
          
            <div className="container  pl-0 pr-0 ">
                <div className=" text-center pt-5">
                    <h1>About Our Farm</h1>
                    <p className=" pr-4 pl-4">At Live Organic, we work with local farmers and producers to bring you peak-quality, high-integrity organic fruits and vegetables. Same DayAt Live Organic, we work with local farmers and producers to bring you peak-quality, high-integrity organic fruits and vegetables</p>
                
    <div className="container mt-5">
        <div className="row justify-content-around">

                <div className="col-lg-2 col-8 mb-5 p-0 card">
                    
                    <div className="card-body">
                        <h5>vegetables</h5>
                        <p>Same DayAt Live Organic, we work with local farmers</p>
                    </div>
                        <img className="card-img-bottom" src={tomato}/>
                    </div>

                    <div className="col-lg-2 col-8 mb-5 p-0 card">
                    <div className="card-body">
                            <h5 >How it works</h5>
                            <p>Same DayAt Live Organic, we work with local farmers </p>
                        </div>
                        <img className="card-img-bottom" src={cabbage}/>

                    </div>
                <div className="col-lg-2 col-8 mb-5 p-0 card">
                <div className="card-body">
                        <h5>Flexibility</h5>
                        <p>Same DayAt Live Organic, we work with local farmers </p>
                    </div>
                    <img className="card-img-bottom" src={carrot}/>

                </div>
                <div className="col-lg-2 col-8 mb-5 p-0 card">
                <div className="card-body">
                        <h5>Farm Products</h5>
                        <p>Same DayAt Live Organic, we work with local farmers </p>
                    </div>
                    <img className="card-img-bottom" src={beetroot}/>

                </div>
                
                </div>
                </div>
                </div>
                </div>
            </div>
            
            </div>
    );
}