import HeroImg from "../assets/Home-Hero-Image.jpg";
import decoration from "../assets/Decoration.svg";

const Header = () => {
  return (
    <div className="headerContainer">
      <img alt="nieuzywane rzeczy" src={HeroImg} />
      <div className="header">
        <h1>Zacznij Pomagać!</h1>
        <h1>Oddaj niechcianie rzeczy w zaufane ręce!</h1>
        <img className="decoration" src={decoration} alt="" />
        <div>
          <a>ODDAJ RZECZY</a>
          <a>ZORGANIZUJ ZBIÓRKĘ</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
