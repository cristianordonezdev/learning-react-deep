export default function ControlActions({amount, handleLess, handleSum}) {
  return (
    <div className="cart-item-actions">
      <button onClick={handleLess}>-</button>
        {amount}
      <button onClick={handleSum}>+</button>
  </div>
  )
}