import React, { useState } from "react";
import axios from "axios";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    contr: "",
    email: "",
    telefono: "",
    address: "",
    mensaje: "",
  });

  const handleChangeForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3011/contacts", formData)
      .then((response) => {
        alert("Gracias por su info.");
      })
      .catch((error) => {
        alert("error", error);
        console.log("error", error);
      });
  };

  return (
    <div className="container mt-5">
      <h2>Registrate</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            placeholder="Como te llamas"
            name="nombre"
            value={formData.nombre}
            onChange={handleChangeForm}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contr">Password</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            placeholder="Sera usada como contraseña"
            name="nombre"
            value={formData.contr}
            onChange={handleChangeForm}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Sera usado como usuario"
            value={formData.email}
            onChange={handleChangeForm}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Telefono</label>
          <input
            type="tel"
            className="form-control"
            id="telefono"
            name="telefono"
            placeholder="55-5555-5555"
            value={formData.telefono}
            onChange={handleChangeForm}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Direccion</label>
          <input
            type="tel"
            className="form-control"
            id="address"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChangeForm}
            required
          />
        </div>

        <button type="submit" className="btn btn-outline-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contacto;

/*
import React, { useState } from 'react'; 
import axios from 'axios'; 
const Contacto = () => { 
  const [formData, setFormData] = useState(
    { nombre: '', email: '', telefono: '', mensaje: '' }
  ); 

  const handleChange = (e) => { 
    setFormData(
      { ...formData, 
        [e.target.name]: e.target.value 
      }); 
    }; 
    
  const handleSubmit = (e) => {
     e.preventDefault(); 
     axios.post('http://localhost:3011/contacts', formData) 
     .then(response => { 
      alert('Formulario enviado con éxito'); 
    })
     .catch(error => { 
      alert('Hubo un error al enviar el formulario'); 
      console.error('Hubo un error al enviar el formulario:', error); 
    }); 
  }; 
  
  return ( 
  
  <div className="container mt-5"> 
  <h2>Contact Us</h2> 
  <form onSubmit={handleSubmit}> 
    <div className="form-group"> 
      <label htmlFor="nombre">Nombre</label> 
      <input type="text" className="form-control" id="nombre" 
      name="nombre" value={formData.nombre} onChange={handleChange} required /> 
    </div> 
    <div className="form-group"> 
      <label htmlFor="email">Email</label> <input type="email" className="form-control" 
      id="email" name="email" value={formData.email} onChange={handleChange} required /> 
    </div> 
    <div className="form-group"> <label htmlFor="telefono">Teléfono</label>
    <input type="tel" className="form-control" id="telefono" name="telefono" 
    value={formData.telefono} onChange={handleChange} /> 
    </div> 
    <div className="form-group"> <label htmlFor="mensaje">Mensaje</label> 
    <textarea className="form-control" id="mensaje" name="mensaje" rows="3" 
    value={formData.mensaje} onChange={handleChange} required ></textarea> 
    </div> <button type="submit" className="btn btn-primary">Enviar</button> 
    </form> 
    </div> 
    
  ); 
}; 

export default Contacto;*/
