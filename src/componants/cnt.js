import React from "react";
import "./cnt.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Link } from "react-router-dom";
export default function Hire(){
    
    return(
<><div class="background body1">
<nav class="navbar navbar-expand-lg navbar-light navtextcolr">
  <a class="navbar-brand" href="#"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNav">
    <ul class="navbar-nav ">
      <li class="nav-item btn">
        <Link class="nav-link " to="/welcome" href="#"><span className="textclr">Home</span></Link>
      </li>
     
      <li class="nav-item btn">
        <Link to="/skills" class="nav-link" href="#"><span className="textclr">Skils</span></Link>
      </li>
      
     
    </ul>
  </div>
</nav>
  <div class="container">
    <div class="screen">
    
       
   
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div class="app-contact">CONTACT INFO : 8870098147</div>
        </div>
        <div class="screen-body-item">
          <div class="app-form">
          <div class="app-form-group">
              <input class="app-form-control" placeholder="NAME "/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="EMAIL"/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="CONTACT NO"/>
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" placeholder="MESSAGE"/>
            </div>
            <div class="app-form-group buttons">
              <button class="app-form-button mr-5">CANCEL</button>
              <button class="app-form-button ">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>



</>


    );
}
