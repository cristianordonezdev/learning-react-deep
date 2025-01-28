import { useState, useContext } from "react";
import logo from "./../assets/logo.jpg";
import Modal from "./Modal";
import Cart from "./Cart";
import { NavLink } from "react-router-dom";
import { DataContext } from "../contexts/DataContext.jsx";

export default function Header() {
  const [showModal, setModal] = useState(false);
  const cart = JSON.parse(localStorage.getItem("cart")) || []

  const [cartLen] = useState(cart.reduce((total, item) => total + item.amount, 0));
  const { headerMessage } = useContext(DataContext);


  const modal = showModal ? (
    <div className="backdrop-modal" onClick={() => setModal(false)}>
      <div onClick={(e) => e.stopPropagation()} className="w-100">
        <Modal close_modal={() => setModal(false)}> 
          <Cart></Cart>
        </Modal>
      </div>
    </div>
  ) : null;  

  return (
    <section>
      <div id="main-header">
        <div id="title">
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <NavLink to={'/'} className="navlink">Inicio</NavLink>
          <NavLink to={'/about'} className="navlink">Acerca</NavLink>

        </div>
        <h5>{headerMessage}</h5>
        <div onClick={() => setModal(true)}>
          cart({cartLen})
        </div>
      </div>

      {modal}
    </section>
  );
}
