import * as react from "react-redux";
import { AGREGAR_PRODUCTO_AL_CARRITO, REMOVER } from "./Actions";

const initialState = {
  productos: [
    {
      id: 1,
      nombre: "React js",
      precio: 1100,
      descripcion: "Components, arrow functions and mapped items",
    },
    {
      id: 2,
      nombre: "JavaScript",
      precio: 1500,
      descripcion: "This is the base of react",
    },
    {
      id: 3,
      nombre: "Bootstrap",
      precio: 1000,
      descripcion:
        "use this to have a better cleaner and fantastic WebApps designs",
    },
    {
      id: 4,
      nombre: "Redux",
      precio: 1200,
      descripcion: "This is the power of the App",
    },
    {
      id: 5,
      nombre: "Next js",
      precio: 1300,
      descripcion: "The next level of reactions",
    },
    {
      id: 6,
      nombre: "Sql",
      precio: 700,
      descripcion: "DataBases info or queries",
    },
    {
      id: 7,
      nombre: "Php",
      precio: 600,
      descripcion: "Backend tool for connexion",
    },
    { id: 8, nombre: "Ajax", precio: 1200, descripcion: "" },
    {
      id: 9,
      nombre: "JQuery",
      precio: 800,
      descripcion: "Interactions on regular and Modern WebApps",
    },
  ],
  carrito: [],
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case AGREGAR_PRODUCTO_AL_CARRITO:
      const addNow = state.productos.find(
        (producto) => producto.id === action.id
      );
      return {
        ...state,
        carrito: [...state.carrito, addNow],
      };
    case REMOVER:
      return {
        ...state,
        carrito: state.carrito.filter(
          (producto, index) => index !== action.index
        ),
      };
    default:
      return state;
  }
};

export default storeReducer;
