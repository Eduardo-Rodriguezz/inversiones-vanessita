import { useContext } from "react";
import "../styles/shopping-kart-style.css";
import { myGlobalContext } from "../context/GlobalContext";
import { dataPrices } from "../dataList";

const ShoppingKart = () => {
  const { setKart, totalPrice, setTotalPrice, totalCount, setTotalCount } =
    useContext(myGlobalContext);

  //funcion que genera el total de todo el calculo incluyendo el array de los elementos agrados al kart.
  const handleTotalAction = (item) => {
    setTotalCount(totalCount + 1);
    setTotalPrice(totalPrice + item.price);
    setKart((prevKart) => {
      if (!prevKart.some((anyItem) => anyItem === item)) {
        return [item, ...prevKart];
      } else {
        return prevKart;
      }
    });
  };

  return (
    <div className="shooping-kart-container">
      <div className="row">
        <div>
          <h5>Selecciona para agregar al carrito</h5>
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th scope="col">Servicio</th>
                <th scope="col">Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {dataPrices.map((dataItem) => {
                return (
                  <tr key={dataItem.id}>
                    <button
                      className="btn-table"
                      onClick={() => {
                        handleTotalAction(dataItem);
                        dataItem.count += 1;
                      }}
                    >
                      <td>{dataItem.name}</td>
                    </button>
                    <td>{dataItem.count}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ShoppingKart;
