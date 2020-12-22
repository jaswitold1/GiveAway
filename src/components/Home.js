import LoggedUpperMenu from "./LoggedUpperMenu";
import LowerMenu from "./LowerMenu";
import main from './main'

import Contact from "./Contact";
import Footer from "./Footer";



import OddajRzeczy from "./OddajRzeczy";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Home = () => {
  
 
  return (
   
    <BrowserRouter>
   
    

      <div className="container">
      
        
          <Route exact path="/" component={main}/>
           
       
          <Route exact path="/oddaj-rzeczy" component={OddajRzeczy}/>
        
        
      </div>
    </BrowserRouter>
  );
};

export default Home;
