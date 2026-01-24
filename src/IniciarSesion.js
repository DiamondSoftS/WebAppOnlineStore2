import React from "react";
import "./App.css";
import {useAuth0} from "@auth0/auth0-react";
import { MdTipsAndUpdates } from "react-icons/md";

function IniciarSesion() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <>
    <center>
      <br/>
     <div>
     <h2 style={{
            backgroundColor: "#000000",
            backgroundImage:
              "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(92,0,0,1) 50%, rgba(10,0,0,1) 100%)",
            height: "200px",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: 75,
            color: "white",
            paddin: 5
          }}     
     >
      
      
      Welcome to ASCYSA</h2>
     </div> 
     <br/>
     <br/>
     <br/>
    <div>
      {!isAuthenticated ? (
        <button className="btn btn-danger" onClick={() => loginWithRedirect()}>
          Iniciar sesión o registrarse
        </button>
      ) : (
        <div>
          <h2>Bienvenido {user.name}</h2>
          <button className="btn btn-danger" onClick={() => logout({ returnTo: window.location.origin })}>
            Cerrar sesión
          </button>
        </div>
        
      )}
    </div>
    <br/>
    <br/>
    <div className="LoginAS">
    <p style={{width:250}}>
      
     <MdTipsAndUpdates/> Sabias que desarrollar una WebApp similar podria costarte de 85 000.00 a 175 000.00 
      mas el 10% de mantenimiento mensual, por tan solo una subcripción mensual y la comisión 
      asociada podrias competir contra las grandes empresas, empodera tu negocio a traves de ASCYSA
    </p>
    </div>
    </center>
    </>
  );
}

export default IniciarSesion;

