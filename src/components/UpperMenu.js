import { Link } from "react-router-dom";

const UpperMenu = () => {
  return (
    <>
      <Link to="/logowanie">Zaloguj</Link>
      <Link to="/rejestracja">Załóż Konto</Link>
    </>
  );
};

export default UpperMenu;
