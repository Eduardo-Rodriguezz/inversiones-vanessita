import { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/header-style.css";
import logoVanessita from "../assets/vanessita_logo.png";
import { myGlobalContext } from "../context/GlobalContext";

const Header = () => {
  const { totalCount } = useContext(myGlobalContext);

  const linkStyles = {
    textDecoration: "none",
    color: "#fff",
  };

  return (
    <div className="header-container container">
      <a href="#" className="header-title" style={linkStyles}>
        <img src={logoVanessita} alt="logo-vanessita" className="img-logo" />
        <h3>
          Inversiones
          <br />
          Vanessita
        </h3>
      </a>
      <nav className="nav-container">
        <Link to={"/"} style={linkStyles} className="btn btn-primary">
          Servicios
        </Link>
        <Link
          to={"shoppingkart"}
          style={linkStyles}
          className="btn btn-primary"
        >
          Presupuesto
        </Link>
        <Link to={"contact"} style={linkStyles} className="btn btn-primary">
          Contacto
        </Link>
        <Link to={"kart"} style={linkStyles} className="btn btn-danger">
          <span className="material-symbols-outlined icon-kart">
            shopping_cart
            <span style={{ fontSize: "20px", fontFamily: "Arial" }}>
              {totalCount}
            </span>
          </span>
        </Link>
      </nav>
    </div>
  );
};
export default Header;
