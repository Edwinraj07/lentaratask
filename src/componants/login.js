import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./login.css";
import { MdPersonOutline} from "react-icons/md";
import { AiOutlineLogin, AiFillGooglePlusCircle } from "react-icons/ai";
import { BsGoogle,BsFacebook } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { Link } from "react-router-dom";
import Welcome from "./welcome";


export default function Loginpage(){

    function data(){
        var username=document.getElementById("username").value;
        var password=document.getElementById("password").value;

        if(username=="edwinraj0055@gmail.com" && password=="Edwin@123")
        {
      
        window.location.href="/welcome"
        }
        else{
            alert("Username Or Password is Wrong");
        }
    }

    function user(){

        var username=document.getElementById("username").value;
        var userid=document.getElementById("userid");
        // var pat=/^([A-z a-z 0-9])+\@([a-z])+\.([a-z])+$/;

        if(username==""){
            userid.innerHTML="*Please fill the username";
        }
        else if(username=="edwinraj0055@gmail.com"){
            userid.innerHTML="User Exists";
        }
        else{
            userid.innerHTML="*Username Not Found";
        }
    }
    function pass(){

        var password=document.getElementById("password").value;
        var passid=document.getElementById("passid");
        // var pat=/^([A-z a-z 0-9])+\@([a-z])+\.([a-z])+$/;

        if(password==""){
            passid.innerHTML="*Please fill the password";
        }
        else if(password=="Edwin@123"){
            passid.innerHTML="Success";
        }
        else{
            passid.innerHTML="*Wrong Password";
        }
    }
    return(
     
        <>
        <div className="container-fluid abstract">
            
            <div className="row ">
           <div className="col-lg-4"/>
            <div className="col-lg-4">
                <div className="inside1 container-fluid">
                    <h1 className="text-white text-center login">LOGIN</h1>
                    <div className="row mt-4">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-10">
                            <div>
                    <div className="d-flex justify-content-center bg-white username-div mb-3">
                        <MdPersonOutline className="text-black user-icon"/>
                    <input className=" username" id="username" type="text" placeholder="Username" onKeyUp={user}/>
                    </div>
                    <p className="text-white col-sm-12 spanuser" id="userid"></p>
                    </div>
                    <div>
                    <div className="d-flex password-div justify-content-center bg-white mb-3">
                        <AiOutlineLogin className="password-icon text-black"/>
                    <input className="password" id="password" type="password"  placeholder="Password" onKeyUp={pass}/>
                    </div>
                    <p className="text-white col-sm-12 spanpassword" id="passid"></p>

                    </div>
                    <button className="btn btn-primary lbtn" onClick={data}>Login</button>
                    </div>

                    <div className="row content left mt-2">
                        <div className="col-lg-12 text-center">
                        <p className="text-white">Don't have an account?  <Link to="/" className="text-primary">Signup</Link></p>
                        </div>
                        <div className="col-lg-12">
                        <p className="col-12 text-center text-primary">Forget Your Password?</p>
                        </div>
                        <div className="row">
                        <div className="col-lg-12 text-white allicons1">
                        <Link to="https://accounts.google.com/"> <AiFillGooglePlusCircle className="googleplus text-white"/></Link>
              <Link to="https://github.com/"> <GoMarkGithub className="socialicons text-white"/></Link>
               <Link to="https://www.facebook.com/" ><BsFacebook className="socialicons text-white"/></Link></div>
                </div>
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