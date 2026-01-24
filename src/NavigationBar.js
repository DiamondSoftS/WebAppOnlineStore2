import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdAccountCircle } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoStorefrontOutline } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";

const NavigationBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.searchTerm);

  const handleInputChange = (event) => {
    dispatch({
      type: "SET_SEARCH_TERM",
      payload: event.target.value,
    });
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-outline"
      data-bs-theme="black"
    >
      <Link to="/" className="navbar-brand">
        Advance Solutions C&S
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="toggle-navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="Inicio" className="nav-link">
              <FaHome style={{ fontSize: "1.3rem" }} />
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <IoStorefrontOutline style={{ fontSize: "1.3rem" }} />
              Tienda
            </Link>
          </li>

          <li className="nav-item">
            <Link to="MiCuenta" className="nav-link">
              <FaArrowUp style={{ fontSize: "1.3rem" }} />
              Cuenta
            </Link>
          </li>

          <li className="nav-item">
            <Link to="IniciarSesion" className="nav-link">
              <MdAccountCircle style={{ fontSize: "1.3rem" }} />
              Iniciar Sesión
            </Link>
          </li>

          <li className="nav-item">
            <Link to="https://wa.me/5662444033" className="nav-link">
              <BsWhatsapp style={{ fontSize: "1.3rem" }} />
              Ayuda
            </Link>
          </li>
        </ul>
        <form className="form-inline ml-auto">
          <input
            type="search"
            className="form-control mr-sm-2"
            aria-label="search"
            placeholder="Busca tu producto"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="button"
          >
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavigationBar;
