import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./signup.css";
import { MdPersonOutline} from "react-icons/md";
import { AiOutlineLogin, AiFillGooglePlusCircle } from "react-icons/ai";
import { BsGoogle,BsFacebook } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { Link } from "react-router-dom";



export default function Signup(){
    return(
        <>
        <div className="container-fluid abstract">
            
            <div className="row ">
           <div className="col-lg-4"/>
            <div className="col-lg-4">
                <div className="inside container-fluid">
                    <h1 className="text-white text-center login">SIGNUP</h1>
                    <div className="row mt-4">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-10">


                    <div className="d-flex justify-content-center bg-white username-div mb-3">
                        {/* <MdPersonOutline className="text-black user-icon"/> */}
                    <input className=" username" type="text" placeholder="Firstname"/>
                    </div>
                    <div className="d-flex justify-content-center bg-white username-div mb-3">
                        {/* <MdPersonOutline className="text-black user-icon"/> */}
                    <input className=" username" type="text" placeholder="Lastname"/>
                    </div>
                    <div className="d-flex justify-content-center bg-white username-div mb-3">
                        {/* <MdPersonOutline className="text-black user-icon"/> */}
                    <input className=" username" type="email" placeholder="Email"/>
                    </div>


                    <div className="d-flex password-div justify-content-center bg-white mb-3">
                        {/* <AiOutlineLogin className="password-icon text-black"/> */}
                    <input className="password" type="password"  placeholder="Password"/>
                    </div>
                    <div className="d-flex password-div justify-content-center bg-white mb-3">
                        {/* <AiOutlineLogin className="password-icon text-black"/> */}
                    <input className="password" type="password"  placeholder="Confirm Password"/>
                    </div>
                    <div className="justify-content-center password-div">
                     <Link to='/login'><a className="btn btn-primary text-white abtn">Signup</a></Link>
                   </div>
                    </div>

                    <div className="row content left mt-2">
                        <div className="col-lg-12 text-center">
                        <p className="text-white">Already have an account? <span className="text-primary"><Link to="/login">   Login</Link></span></p>
                        </div>
                        <div className="col-lg-12">
                        <p className="col-12 text-center text-white">or</p>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-white allicons">
                        <Link to="https://accounts.google.com/"> <AiFillGooglePlusCircle className="googleplus text-white"/></Link>
              <Link to="https://github.com/"> <GoMarkGithub className="socialicons text-white"/></Link>
               <Link to="https://www.facebook.com/" ><BsFacebook className="socialicons text-white"/></Link></div>
                </div>
                    </div>

                    
                </div>
                
                </div> 
            <div className="col-lg-4"/>
        </div>
        </div>
        </>
    );
}