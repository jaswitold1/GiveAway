import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const UpperMenu = () => {
  return (
    <>
      <Link>Start</Link>
      <Link>Jak zacząć?</Link>
      <Link>O nas</Link>
      <Link>Fundacje i organizacje</Link>
      <Link>Kontakt</Link>
    </>
  );
};

export default UpperMenu;
