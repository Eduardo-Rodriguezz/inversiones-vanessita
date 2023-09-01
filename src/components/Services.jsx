import { useContext, useEffect, useState } from "react";
import "../styles/services-style.css";
import PriceModal from "./PriceModal";
import { myGlobalContext } from "../context/GlobalContext";
import { dataServices } from "../dataList";

const Services = () => {
  const { show, setShow, setTempPrice, setTempName } =
    useContext(myGlobalContext);

  return (
    <div className="services-container container">
      {dataServices.map((service, id) => {
        return (
          <div className="card" style={{ width: "18rem" }} key={service.id}>
            <img
              src={service.img}
              className="card-img-top"
              alt={service.name}
            />
            <div className="card-body">
              <h5 className="card-title">{service.name}</h5>
              <p className="card-text">{service.description}</p>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setShow(!show);
                  setTempName(service.name);
                  {
                    switch (true) {
                      case !!service.price.color:
                        setTempPrice(
                          <>
                            En blanco y negro: ${service.price.bn} <br />A
                            color: ${service.price.color}
                          </>
                        );
                        break;

                      case !!service.price.amplified:
                        setTempPrice(
                          <>
                            8 fotos tipo carnet: ${service.price.eigthPhotos}{" "}
                            <br />1 Fotografía ampliada: $
                            {service.price.amplified}
                          </>
                        );
                        break;

                      case !!service.price.nuevoRif:
                        setTempPrice(
                          <>
                            Nuevo Rif: ${service.price.nuevoRif} <br />
                            Recuperación de Rif: $
                            {service.price.recuperacionRif} <br />
                            Actualización de Rif: ${
                              service.price.updateRif
                            }{" "}
                            <br />
                            Nueva cuenta del Banco de Venezuela: $
                            {service.price.newBdv} <br />
                            Nueva cuenta del portal SAIME: $
                            {service.price.newSaimeAcc} <br />
                            Recuperación de usuario SAIME: $
                            {service.price.recuperacionSaime} <br />
                            Citas para cedulación o pasaporte: $
                            {service.price.citaSaime}
                          </>
                        );
                        break;

                      case !!service.price:
                        setTempPrice(<>Precio: ${service.price}</>);
                        break;

                      default:
                        break;
                    }
                  }
                }}
              >
                Ver precios
              </button>
            </div>
          </div>
        );
      })}
      <PriceModal />
    </div>
  );
};
export default Services;
