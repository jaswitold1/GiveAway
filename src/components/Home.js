import main from "./main";
import UpperMenu from "./UpperMenu";

import Logowanie from "./Logowanie";
import Rejestracja from "./Rejestracja";

import OddajRzeczy from "./OddajRzeczy";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <div className='upperMenu'>
          <UpperMenu />
        </div>

        <Route exact path='/' component={main} />

        <Route path='/logowanie' component={Logowanie} />

        <Route path='/rejestracja' component={Rejestracja} />
        <Route exact path='/oddaj-rzeczy' component={OddajRzeczy} />
      </div>
    </BrowserRouter>
  );
};

export default Home;
