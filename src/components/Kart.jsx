import { useContext } from "react";
import { myGlobalContext } from "../context/GlobalContext";
import "../styles/kart-style.css";

const Kart = () => {
  const { totalPrice, totalCount, kart, resetKart } =
    useContext(myGlobalContext);

  return (
    <div className="kart-container">
      <h4>Items en el Carrito: {totalCount}</h4>
      <div>
        {
          <table className="table table-dark table-striped">
            <thead>
              <tr>
                <th scope="col">Servicio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
              </tr>
            </thead>
            <tbody>
              {kart.map((itemKart) => {
                return (
                  <tr key={itemKart.id}>
                    <td>{itemKart.name}</td>
                    <td>{itemKart.count}</td>
                    <td>${(itemKart.price * itemKart.count).toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        }
      </div>
      <h3>
        Total a pagar:{" "}
        <span className="unit-resaltar">
          ${totalPrice.toFixed(2)} - Bs {(totalPrice * 33).toFixed(2)}
        </span>
      </h3>
      <button
        onClick={() => {
          resetKart();
        }}
        className={totalCount === 0 ? "btn-invisible" : "btn btn-warning"}
        style={{ fontSize: "1.2em", fontWeight: "800" }}
      >
        Vaciar Carrito
      </button>
    </div>
  );
};

export default Kart;
