import React from "react";
import { Link } from "react-router-dom";

/*const IniciarSesion = () => {
  return (
    <>
      <center>
        <br />
        <br />
        <h2>Login</h2>
        <br />
        <div className="form-group" style={{ width: 350, height: 200 }}>
          <form>
            <label>Username:</label>
            <input type="text" className="form-control" />
            <label>password:</label>
            <br />
            <input type="password" className="form-control" />
            <br />
            <button className="btn btn-outline-success form-control">
              Login
            </button>
            <br />
            <Link to="../Registrate">
              <button className="btn btn-outline-warning form-control">
                Registrarse
              </button>
            </Link>
          </form>
        </div>
      </center>
    </>
  );
};*/

import { useAuth0 } from "@auth0/auth0-react";

function IniciarSesion() {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Iniciar sesión</button>;
}

export default IniciarSesion;

