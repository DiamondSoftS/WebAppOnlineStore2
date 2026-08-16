import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { agregarAlCarrito, removeCart } from "./Actions";
import { GiShoppingCart } from "react-icons/gi";
import GooglePayButton from "@google-pay/button-react";
import "./App.css";

function DispatchStore() {
  const productos = useSelector((state) => state.tienda.productos) || [];
  const carrito = useSelector((state) => state.tienda.carrito);
  const searchTerm = useSelector((state) => state.searchTerm) || "";
  const [showPayButton, setShowPayButton] = useState(false);

  const filteredProducts = productos.filter(
    (product) =>
      product.nombre &&
      product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const dispatch = useDispatch();

  const addNow = (id) => {
    dispatch(agregarAlCarrito(id));
  };

  const removeItem = (index) => {
    dispatch(removeCart(index));
  };

  const total = carrito.reduce(
    (totalAmount, actual) => totalAmount + actual.precio,
    0.0
  );

  useEffect(() => {
    setShowPayButton(carrito.length > 0);
  }, [carrito]);

  const handleLoadPaymentData = (paymentData) => {
    console.log("PaymentData: ", paymentData);

    // Calcular el 5.7% adicional
    const additionalAmount = total * 0.057;

    // Aquí puedes enviar el monto total y el porcentaje adicional a las cuentas correspondientes
    const contractorAmount = total - additionalAmount;

    // Lógica para transferir los montos a las cuentas correspondientes
    // (esto dependerá de cómo esté configurada tu cuenta bancaria y las APIs que uses)
    console.log(`Monto total: ${total}`);
    console.log(`Monto al contratante: ${contractorAmount}`);
    console.log(`Monto adicional: ${additionalAmount}`); // 5.7% payment for services
  };

  return (
    <>
      <br />
      <center>
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-md-4 col-lg-4 col-12" key={product.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src="https://wallpaperaccess.com/full/533451.jpg"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="bi bi-tag">
                    {product.nombre} ${product.precio}
                  </h5>
                  <p className="card-text">{product.descripcion}</p>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => addNow(product.id)}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </center>
      <div className="cart-container">
        <span>
          <p className="SpecialClass">
            <h6>
              <center>
                Carrito <GiShoppingCart />{carrito.length}

              </center>
            </h6>
            <hr />
            <ul>
              {carrito.map((item, index) => (
                <li key={item.id}>
                  {item.nombre} - ${item.precio}
                  <br />
                  <button
                    className="btn btn-danger"
                    onClick={() => removeItem(index)}
                  >
                    Eliminar
                  </button>
                  <hr />
                </li>
              ))}
            </ul>
            total: ${total} 
          </p>           
        
        </span>
      </div>
      {showPayButton && (
        <div className="floating-pay-button">
          <GooglePayButton
            environment="TEST" // Cambia a "PRODUCTION" cuando estés listo
            paymentRequest={{
              apiVersion: 2,
              apiVersionMinor: 0,
              allowedPaymentMethods: [
                {
                  type: "CARD",
                  parameters: {
                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                    allowedCardNetworks: ["MASTERCARD", "VISA"],
                  },
                  tokenizationSpecification: {
                    type: "PAYMENT_GATEWAY",
                    parameters: {
                      gateway: "example", // Reemplaza 'example' con tu gateway real
                      gatewayMerchantId: "exampleMerchantId", // Reemplaza 'exampleMerchantId' con tu ID de comerciante del gateway
                    },
                  },
                },
              ],
              merchantInfo: {
                merchantId: "BCR2DN4TX74ZZX2X", // Tu Merchant ID
                merchantName: "AdvanceSolutions C&S",
              },
              transactionInfo: {
                totalPriceStatus: "FINAL",
                totalPriceLabel: "Total",
                totalPrice: total.toString(), // Monto total de la transacción
                currencyCode: "MXN",
                countryCode: "MX",
              },
            }}
            onLoadPaymentData={handleLoadPaymentData}
            buttonColor="black"
            buttonType="buy"
          />
        </div>
      )}
    </>
  );
}

export default DispatchStore;
