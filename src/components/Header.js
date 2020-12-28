import HeroImg from "../assets/Home-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg";
import {Link} from 'react-router-dom'

const Header = () => {
  const linkOddajRzeczy = '/oddaj-rzeczy'
  const linkNotLogged = '/logowanie'
  return (
    <div className="headerContainer">
      <img alt="nieuzywane rzeczy" src={HeroImg} />
      <div className="header">
        <h1>Zacznij Pomagać!</h1>
        <h1>Oddaj niechcianie rzeczy w zaufane ręce!</h1>
        <img className="decoration" src={decoration} alt="" />
        <div>
          <Link to={linkOddajRzeczy}>ODDAJ RZECZY</Link>
          <p>STWÓRZ ZBIÓRKĘ</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
