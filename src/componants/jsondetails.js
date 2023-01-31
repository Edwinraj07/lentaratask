import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";


export function Details1(){
   const [products,setProducts]=useState([]);
   useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=>setProducts(data))
   },[])
   return(
    <>
    <div className="container-fluid text-center">
    <div className="row justify-content-center">
    {products.map((value,index)=>(
       <div className="card shadow col-lg-3 ml-5 p-2 mb-5" >
       <img className="card-img-top container-fluid p-5 " height="400px" width="200px" src={value.image}/>
       <div className="card-body">
        
         <h5 className="card-title">{value.title}</h5>
         <h3 className="card-text">${value.price}</h3>
         
       </div>
        <br/>
<h1><StarRatings rating={value.rating.rate} starDimension="25px" starSpacing="2px" starRatedColor="gold"/></h1>
        <button class="btn btn-warning">Add to Cart</button>
       
        
        
        
        
        </div>
        
        
    ))}
    </div>
    </div>
    </>
   );
}