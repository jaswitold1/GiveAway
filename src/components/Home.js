import UpperMenu from "./UpperMenu";
import LowerMenu from "./LowerMenu";
import main from './main'

import Contact from "./Contact";
import Footer from "./Footer";



import OddajRzeczy from "./OddajRzeczy";
import { BrowserRouter, Route } from "react-router-dom";

const Home = () => {
  
 
  return (
   
    <BrowserRouter>
    {
      //sprawdzic w adobe xd czy lower menu nie powinno byc w komponencie Main
    }
    

      <div className="container">
        <div className="upperMenu">
          <UpperMenu  />
        </div>
        <div className="lowerMenu">
          <LowerMenu />
        </div>
        
          <Route exact path="/" component={main}/>
           
       
          <Route exact path="/oddaj-rzeczy" component={OddajRzeczy}/>
        
        <Contact id="contact" />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Home;
