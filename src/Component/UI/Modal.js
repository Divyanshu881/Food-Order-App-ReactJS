import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay =(props)=>{
    return <div className={classes.modal}>{props.children}</div>
}

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose}/>,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>
            {props.children}
        </ModalOverlay>,
        document.getElementById("overlays")
      )}

    </React.Fragment>
  );
};

export default Modal;
