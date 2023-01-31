import React from "react";
import './card.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import img1 from "./img1.jpg";
import img2 from "./img2.png";
import img3 from "./img3.jpeg"
import { Link } from "react-router-dom";

export default function Card(){
    
    return(

<>
<div>
  
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
      <li class="nav-item btn ">
        <Link to="/hire" class="nav-link" href="#"><span className="textclr">To Hire</span></Link>
      </li>
     
    </ul>
  </div>
</nav>
    
<div class="container">
      <div class="box">
      <div class="image">
      <img src={img1} />
        </div>
        <div class="name_job">APPLE SHOWROOM</div>
        <p> Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit. Ratione disuja doloremque reiciendi nemo.</p>
        <div class="btns">
          <Link to="/json" className="text-black"><button className="pl-5 pr-5">View</button></Link> 
         
        </div>
      </div>
      <div class="box">
        <div class="image">
        <img src={img2}/>
        </div>
        <div class="name_job">RESPONSIVE DESIGN</div>
        
        <p> Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit. Ratione disuja doloremque reiciendi nemo.</p>
        <div class="btns">
        <Link to="/responsive" className="text-black"><button className="pl-5 pr-5">View</button></Link> 
          
        </div>
      </div>
      <div class="box">
        <div class="image">
         <img src={img3}/>
        </div>
        <div class="name_job">FAKE API</div>
          
        <p> Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit. Ratione disuja doloremque reiciendi nemo.</p>
        <div class="btns ">
        <Link to="/fakeapi" className="text-black"><button className="pl-5 pr-5">View</button></Link> 
          
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5"/>
      <div class="box col-lg-4">
        <div class="image">
        <img src={img2}/>
        </div>
        <div class="name_job">Portfolio</div>
        
        <p> Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit. Ratione disuja doloremque reiciendi nemo.</p>
        <div class="btns">
        <Link to="https://bit.ly/portfolio_Edwin_Raj" className="text-black"><button className="pl-5 pr-5">View</button></Link> 
          
        </div>
      </div>
      <div className="col-lg-4"/>
      </div>
    </div>
    </div>
</>


    );
}
