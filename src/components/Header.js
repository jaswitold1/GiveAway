import HeroImg from "../assets/Home-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const linkOddajRzeczy = "/oddaj-rzeczy";
  const linkNotLogged = "/logowanie";
  return (
    <div className='headerContainer'>
      <img alt='nieuzywane rzeczy' src={HeroImg} />
      <div className='header'>
        <h1>Help people in need!</h1>
        <h1>Donate Your stuff!</h1>
        <img className='decoration' src={decoration} alt='' />
        <div className={"stepsLandingPage"}>
          <Link to={linkOddajRzeczy}>GIVEAWAY TO THOSE IN NEED</Link>
          <p>NEW LOCAL DONATION</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
