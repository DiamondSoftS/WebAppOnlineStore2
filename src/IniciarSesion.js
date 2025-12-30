import React from "react";
import {useAuth0} from "@auth0/auth0-react";

function IniciarSesion() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div>
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>
          Iniciar sesión
        </button>
      ) : (
        <div>
          <h2>Bienvenido {user.name}</h2>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
}

export default IniciarSesion;

