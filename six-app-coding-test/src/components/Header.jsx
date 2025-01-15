import { useState } from "react";
import logo from "./../assets/logo.jpg";
import Modal from "./Modal";
import Cart from "./Cart";

export default function Header() {
  const [showModal, setModal] = useState(false);
  const cart = JSON.parse(localStorage.getItem("cart")) || []

  const [cartLen] = useState(cart.reduce((total, item) => total + item.amount, 0));


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
        <div onClick={() => setModal(true)}>
          cart({cartLen})
        </div>
      </div>

      {modal}
    </section>
  );
}
