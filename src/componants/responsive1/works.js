import React from "react";
import sheep from "../responsive1/goat.jpg";
import "./work.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import work2 from "../responsive1/natu.png";
import work3 from "../responsive1/work3.jpg";


export function Work(){
    return (
        <div>
            
        <div className="container-fluid workcontent">
            <div className="text-center container pt-5">
                <h1 className="text-white">How It Works?</h1>
                <p className="text-white">Natural climate solutions are conservation, restoration and improved land management actions that increase carbon storage or avoid greenhouse gas emissions in landscapes and wetlands across the globe.Natural climate solutions are conservation, restoration and improved land management actions that increase carbon storage or avoid greenhouse gas emissions in landscapes and wetlands across the globe.</p>
                

                <div className="container">
                    <div className="row pb-5">

                        <div className="col-lg-4 mt-4">
                            <div className="card">
                            <img className="sheep" src={sheep}/>
                            
                            </div>
                        </div>

                        <div className="col-lg-4 mt-4">
                            <div className="card">
                            <FontAwesomeIcon icon={faLeaf}/>
                            <h5>Organic Farming</h5>
                        <p>Natural climate solutions are conservation, restoration and improved land management actions that increase carbon storage or avoid greenhouse gas emissions in landscapes and wetlands across the globe Natural climate solutions are conservation, restoration and</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 mt-4">
                        <div className="card"> 
                            <img className="sheep" src={work2}/>
                        </div>
                        </div>

                        <div className="col-lg-4 mt-4">
                        <div className="card">
                            <FontAwesomeIcon icon={faLeaf}/>
                            <h5>Organic Farming</h5>
                        <p>Natural climate solutions are conservation, restoration and improved land management actions that increase carbon storage or avoid greenhouse gas emissions in landscapes and wetlands across the globe Natural climate solutions are conservation, restoration and.</p>
                        </div>
                        </div>

                        <div className="col-lg-4 mt-4">
                        <div className="card">
                            <img className="sheep" src={work3}/>
                        </div>
                        </div>

                        <div className="col-lg-4 mt-4">
                        <div className="card">
                            <FontAwesomeIcon icon={faLeaf}/>
                            <h5>Organic Farming</h5>
                        <p>Natural climate solutions are conservation, restoration and improved land management actions that increase carbon storage or avoid greenhouse gas emissions in landscapes and wetlands across the globe Natural climate solutions are conservation, restoration and </p>
                            </div>

                        </div>
                        

                    </div>
                    
                </div>
                
                </div>
                


               
            </div>
        </div>
    );
}