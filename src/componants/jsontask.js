import React, { useState,useEffect } from "react";
import "./jsontask.css";
import "bootstrap/dist/css/bootstrap.css"
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";


export function Jsontask(){
    const [details,setDetails]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/data.json")
        .then(info=>info.json())
        .then(data=>setDetails(data))
    },[])
    return(
       
        <div className="row col-lg-12 total">
            
            {details.map((display,index)=>(
               
                    
                <div className="card col-lg-2 ml-5 p-2 mb-5" >
                <img className="card-img-top container-fluid " src={display.Image} alt="Boat Xtend"/>
                <div className="card-body">
                  <h5 className="card-title">{display.Brand}</h5>
                  <p className="card-text">{display.Description}</p>
                  <p className="card-text">{display.Price}</p>
                  <button class="btn btn-primary ">View More</button>
                    <p> <StarRatings rating={display.star} starDimension="13px" starSpacing="15px" starRatedColor="gold"/>
                    </p>
                </div>
                </div>
              
            

            ))}


        </div>
    );
}