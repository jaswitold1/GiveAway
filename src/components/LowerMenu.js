import { Link, animateScroll as scroll } from "react-scroll";

const UpperMenu = () => {
  return (
    <>
      <Link to='whoDoWeHelp' smooth={true}>
        Start
      </Link>
      <Link to='fourSteps' smooth={true}>
        How to start?
      </Link>
      <Link to='aboutUs' smooth={true}>
        About us
      </Link>
      <Link to='whoDoWeHelp' smooth={true}>
        Foundations
      </Link>
      <Link to='contact' smooth={true}>
        Contact
      </Link>
    </>
  );
};

export default UpperMenu;
