export const AGREGAR_PRODUCTO_AL_CARRITO = "AGREGAR_PRODUCTO_AL_CARRITO";
export const REMOVER = "REMOVER";

export function agregarAlCarrito(id) {
  return {
    type: AGREGAR_PRODUCTO_AL_CARRITO,
    id,
  };
}

export function removeCart(index) {
  return {
    type: REMOVER,
    index,
  };
}
