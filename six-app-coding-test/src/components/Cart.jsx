import { useEffect, useState } from "react";
import ControlActions from "./ControlActions";

export default function Cart() {
  const [cartState, setCartState] = useState([])
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartState(cart);
  }, [])

  function handleActionSumLess(action, cart) {
    action === "sum" ? cart.amount += 1 : cart.amount -= 1;
    const newCart = cartState.map(i => {
      if (i.id === cart.meal.id) {
        action === "sum" ? i.amount += 1 : i.amount -= 1;
      }
      return i;
    })
    setCartState(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart));
  
  }

  function totalSum() {
    return cartState.reduce((total, item) => total + parseFloat(item.meal.price) * item.amount, 0).toFixed(2)
  }

  return (
    <article className="cart">
      <h2>Your cart</h2>
      {cartState.map((c) => (
        <div className="container-actions-modal-cart" key={c.meal.id}>
          <p>{c.meal.name} - {c.amount} x ${c.meal.price}</p> 
          <ControlActions 
            amount={c.amount} 
            handleLess={() => handleActionSumLess('less', c)} 
            handleSum={() => handleActionSumLess('sum', c)}
          ></ControlActions>
        </div>
      ))}

      <div className="total-result">
        <span>
          ${totalSum()}

        </span>

        <button className="button">Go to checkout</button>
      </div>
    </article>
  )    
}