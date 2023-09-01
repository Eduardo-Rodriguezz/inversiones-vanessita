import { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { myGlobalContext } from "../context/GlobalContext";
import "../styles/modal-style.css";

const PriceModal = () => {
  const { show, setShow, tempPrice, tempName, kart, setKart } =
    useContext(myGlobalContext);

  const handleClose = () => setShow(false);

  const modalTextStyles = {
    textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>
            <p style={modalTextStyles}>{tempName}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-container">{tempPrice}</Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PriceModal;
