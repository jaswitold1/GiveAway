import * as Scroll from "react-scroll";
import { Link, animateScroll as scroll } from "react-scroll";

const UpperMenu = () => {
  return (
    <>
      <Link to="whoDoWeHelp" smooth={true}>
        Start
      </Link>
      <Link to="fourSteps" smooth={true}>
        Jak zacząć?
      </Link>
      <Link to="aboutUs" smooth={true}>
        O nas
      </Link>
      <Link to="whoDoWeHelp" smooth={true}>
        Fundacje i organizacje
      </Link>
      <Link to="contact" smooth={true}>
        Kontakt
      </Link>
    </>
  );
};

export default UpperMenu;
