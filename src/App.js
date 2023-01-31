import { BrowserRouter,Routes,Route } from "react-router-dom";
import Welcome from "./componants/welcome";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Card from "./componants/card";
import { Jsontask } from "./componants/jsontask";
import { Home } from "./componants/responsive1/home";
import { Menu } from "./componants/responsive1/menu";



import { About } from './componants/responsive1/about';
import { Work } from './componants/responsive1/works';
import { Ourfarm } from './componants/responsive1/ourfarm';

import { Testimonials } from './componants/responsive1/testimonial';
import { Organic } from './componants/responsive1/organicfood';
import { Details1 } from "./componants/jsondetails";
import { Skills } from "./skills";


import Hire from "./componants/cnt";
import Signup from "./componants/signup";
import Loginpage from "./componants/login"
function App() {
  return (
    <div>
  
    
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Signup/>}/>
    <Route path="/login" element={<Loginpage/>}/>
    <Route path="/welcome" element={<Welcome/>}/>
    <Route path="/home" element={[<Menu/>,<Home/>]}/>
    <Route path="/work" element={[<Menu/>,<Work/>]}/>
    <Route path="/organic" element={[<Menu/>,<Organic/>]}/>
    <Route path="/about" element={[<Menu/>,<About/>]}/>
    <Route path="/farm" element={[<Menu/>,<Ourfarm/>]}/>
    <Route path="/fakeapi" element={[<Details1/>]}/>
    <Route path="/testimonials" element={[<Menu/>,<Testimonials/>]}/>
    <Route path="/responsive" element={[<Menu/>,<Home/>]}/>
    
    <Route path="/skills" element={[<Skills/>]}/>
    <Route path="/hire" element={<Hire/>}/>

             
    <Route path="Card" element={<Card/>} />
    <Route path="/json" element={<Jsontask/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
