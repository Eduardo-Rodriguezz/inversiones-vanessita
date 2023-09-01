import { createContext, useEffect, useState } from "react";
import { dataPrices, dataServices } from "../dataList";
export const myGlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [tempPrice, setTempPrice] = useState(null);
  const [tempName, setTempName] = useState("");
  const [tempCount, setTempCount] = useState(0);
  const [kart, setKart] = useState([]);
  const [localCount, setLocalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const resetKart = () => {
    setTotalPrice(0);
    setTotalCount(0);
    setKart([]);
    setLocalCount(0);
    dataPrices.map(item => {
      return (
        item.count = 0
      )
    })
  };

  useEffect(() => {
    console.log(kart);
  }, [kart]);

  return (
    <myGlobalContext.Provider
      value={{
        show,
        tempPrice,
        tempName,
        dataServices,
        kart,
        totalPrice,
        totalCount,
        tempCount,
        localCount,
        setTempPrice,
        setTempName,
        setShow,
        setKart,
        setTotalPrice,
        setTotalCount,
        setTempCount,
        resetKart,
        setLocalCount,
      }}
    >
      {children}
    </myGlobalContext.Provider>
  );
};

export default GlobalProvider;
