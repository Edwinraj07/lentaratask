import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import  './menu.css'
export function Menu(){
    return(
        <div>
           <nav className="navbar navbar-expand-lg navbar-light ">
            <span className="navbrand-brand text-success  ml-5"><FontAwesomeIcon icon={faLeaf}/>ORGANIC</span>
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse bg1"id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <Link to="/home" className="navbar-brand  ml-5">Home</Link>
      </li>
      <li className="nav-item">
      <Link to="/work" className="navbar-brand ml-5">Works</Link>
      </li>
      <li className="nav-item">
      <Link to="/organic" className="navbar-brand ml-5">Organic</Link>
      </li>
      <li className="nav-item">
      <Link to="/about" className="navbar-brand ml-5">About</Link>
      </li>
      <li className="nav-item">
      <Link to="/farm" className="navbar-brand ml-5">OurFarm</Link>
      </li>
     
      <li className="nav-item">
      <Link to="/testimonials" className="navbar-brand ml-5">Testimonials</Link>
      </li>

      <li className="nav-item">
      <Link to="/Card" className="navbar-brand ml-5">More Projects</Link>
      </li>
      
    </ul>
    
  </div>
</nav>



        </div>
    );
}