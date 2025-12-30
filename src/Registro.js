import react, { useState } from "react";
import axios from "axios";

const Registro = () => {
  const [formInformacion, setFormInformacion] = useState({
    nombre: "",
    direccion: "",
    telefono: "",
    email: "",
  });

  const getInfo = (e) => {
    setFormInformacion({
      ...formInformacion,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3011/contacts", formInformacion)
      .then((response) => {
        alert("Gracias por su info.");
      })
      .catch((error) => {
        alert("error", error);
        console.log("error", error);
      });
  };

  return (
    <>
      <div className="container mt-5">
        <h2>Registrate</h2>
        <br />
        <form onSubmit={SubmitInfo}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre Completo</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              placeholder="Introduce tu nombre completo"
              value={formInformacion.nombre}
              onChange={getInfo}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Direccion de envio</label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Introduce tu dirección de envio"
              value={formInformacion.direccion}
              onChange={getInfo}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="nombre">Telefono</label>
            <input
              type="text"
              className="form-control"
              id="telefono"
              placeholder="Introduce tu nombre completo"
              value={formInformacion.telefono}
              onChange={getInfo}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="nombre">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Introduce tu nombre completo"
              value={formInformacion.email}
              onChange={getInfo}
              required
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Registro;
