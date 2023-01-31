import React from "react";

import { Home } from "./home";
import { Work } from "./works";
import { Organic } from "./organicfood";
import { About } from "./about";
import { Ourfarm } from "./ourfarm";
import { Products } from "./products";
import { Testimonials } from "./testimonial";


export function Responsive(){
    return(
        <div>
            
            
            <Home/>
            <Work/>
            <Organic/>
            <About/>
            <Ourfarm/>
            <Products/>
            <Testimonials/>
        </div>
    );
}