import React from "react";
import { Link } from "react-router-dom";
import ASCYSA from "./ASCYSA.png";
import { CiMoneyCheck1 } from "react-icons/ci";
import { IoDiamondSharp } from "react-icons/io5";
import { GiStarMedal } from "react-icons/gi";
import { GiMoneyStack } from "react-icons/gi";

const Inicio = () => {
  return (
    <>
      <center>
        <div
          style={{
            backgroundColor: "#000000",
            backgroundImage:
              "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(92,0,0,1) 50%, rgba(10,0,0,1) 100%)",
            height: "200px",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: 250,
            color: "white",
          }}
        >
          <p
            style={{
              background: "white",
              color: "black",
            }}
          >
            {" "}
            Usa nuestra platorma en linea para introducirte <br />a un mercado
            nacional
          </p>

          <br />
          <img src={ASCYSA} style={{ width: 300, height: 300 }} />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12" style={{ backgroundColor: "white" }}>
            <h2> Conoces nuestros planes</h2>
            <p>Basico $599.00 al mes </p>
            <p>+5.7% de comision sobre el precio final del producto</p>
            <p>+tarifas de procesamientos de pago.</p>
            <p>Pagos encriptados y seguros a traves de Google pay</p>
            <p>Sin plazos forzosos, conoce los t&c sobre la activación y términos legales en el help center antes de contratar el servicio.</p>
            <p>
              Cumplimiento normativo digital: Para negocios que manejan datos
              sensibles, contar con SSL es parte de cumplir estándares de
              seguridad y privacidad.
            </p>
          </div>
          <br />
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h2>Beneficios</h2>
            <p>Sin costos de almacenamiento, ni logistica</p>
            <p>maneja tus envios o entrega en tienda </p>
            <p>
              La comision en el mercado varia del 7 al 15% de comision <br />
              sobre tu ganancia
            </p>
            <p>Personalizamos el sitio con tu marca, sin costo de desarrollo</p>
            <p>
              Recibe y acepta más de 100 métodos de pago, incluyendo tarjetas de
              crédito/débito (Visa, Mastercard, Amex), billeteras digitales
              (Apple Pay, Google Pay), transferencias bancarias (SEPA, Adeudo
              Directo, métodos locales OXXO en México, Bancontact, iDEAL
            </p>
          </div>
        </div>
        <div
          className="row"
          style={{
            backgroundColor: "#000000",
            backgroundImage:
              "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(92,0,0,1) 50%, rgba(10,0,0,1) 100%)",
            height: "420px",
            width: "100%",
            border: "1px solid black",
            color: "white",
          }}
        >
          <div
            className="col-sm-4 col-12"
            style={{
              backgroundColor: "#000000",
              backgroundImage:
                "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(92,0,0,1) 50%, rgba(10,0,0,1) 100%)",
              height: "450px",
              width: "100%",
              border: "1px solid black",
              color: "white",
            }}
          >
            <h2 style={{ backgroundColor: "black", color: "white" }}>
              <GiMoneyStack /> Basic
            </h2>
            <p>Vende en un mercado Nacional</p>
            <p>
              <CiMoneyCheck1 /> Cobra desde el sitio web
            </p>
            <p>Maneja tus envios</p>
            <p>
              Conecta el sitio Web a tu cuenta de atencion de clientes WhatsApp
            </p>
            <p> Soporte en español las 24 horas</p>
            <h3 className="text-success">$599.00 </h3>
            <p>+ 5.7% de comision por compra</p>
            <Link to="../IniciarSesion">
              <button className="btn btn-outline-success">Agregar plan</button>
            </Link>
          </div>
          <div
            className="col-sm-4 col-12"
            style={{
              backgroundColor: "#000000",
              backgroundImage:
                "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(92,0,0,1) 50%, rgba(10,0,0,1) 100%)",
              height: "450px",
              width: "100%",
              border: "1px solid black",
              color: "white",
              border: "1px solid black",
            }}
          >
            <h2 style={{ backgroundColor: "black", color: "white" }}>
              <GiStarMedal /> Advance
            </h2>

            <p>Vende en un mercado Nacional</p>
            <p>
              <CiMoneyCheck1 /> Cobra desde el sitio web
            </p>
            <p>Maneja tus envios</p>
            <p>
              Conecta el sitio Web a tu cuenta de atencion de clientes WhatsApp
            </p>
            <p> Soporte premium en español las 24 horas</p>
            <h3 className="text-success">$899.00 </h3>
            <p>+ 3.5% de comision por compra</p>
            <Link to="../IniciarSesion">
              <button className="btn btn-outline-success">Agregar plan</button>
            </Link>
          </div>
          <div
            className="col-sm-4 col-12"
            style={{
              backgroundColor: "#000000",
              backgroundImage:
                "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(92,0,0,1) 50%, rgba(10,0,0,1) 100%)",
              height: "450px",
              width: "100%",
              border: "1px solid black",
              color: "white",
              border: "1px solid black",
            }}
          >
            <h2 style={{ backgroundColor: "black", color: "white" }}>
              <IoDiamondSharp /> Diamond
            </h2>
            <p>Vende en un mercado Nacional</p>
            <p>
              <CiMoneyCheck1 /> Cobra desde el sitio web
            </p>
            <p>Maneja tus envios</p>
            <p>
              Conecta el sitio Web a tu cuenta de atencion de clientes WhatsApp
            </p>
            <p> Soporte premium en español las 24 horas</p>
            <p>Programa de recompensas</p>
            <h3 className="text-success">$5,500.00 </h3>
            <p>sin comision</p>
            <Link to="../IniciarSesion">
              <button className="btn btn-outline-success">Agregar plan</button>
            </Link>
          </div>
        </div>
      </center>
      <br />
      <br />
      <br />
      <footer style={{ backgroundColor: "black" }}>
        <p>Derechos reservados @ASCYSA marca Méxicana registrada</p>
        <p>Contacta a los desarrolladores</p>
      </footer>
    </>
  );
};

export default Inicio;