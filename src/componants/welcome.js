import React from "react";
import './welcome.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Link } from "react-router-dom";

export default function Welcome(){
    
    return(
        <>
	<header>
        <div>
		<div class="main">
	
		
		 {/* <ul>
		 <li class="active"><a href="#"><i class="fa fa-home"></i>Home</a></li>
		 <li><a href="#">About</a></li>
		 <li><a href="#">Skills</a></li>
		 <li><a href="#">Login Page</a></li>
		 
		 	
		</ul> */}

		 </div>
		 <div class="title">
		 	<h1>Welcome</h1>
		 </div>
		 <div class="button">
		 	<Link to="/Card" class="btn">VIEW MY PROJECT</Link>
		 	<Link to="/skills" class="btn">BASIC SKILLS</Link>
		 	<Link to="/hire" href="#" class="btn">HIRE ME</Link>
		 </div>
         </div>

		 	</header>



    </>

   );
}
