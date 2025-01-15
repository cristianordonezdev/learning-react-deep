export default function Meal({data}) {
  
  function addToCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    console.log('here', cart)

    const cartFound = cart.find(j => j.meal.id === data.id)
      if (!cartFound) {
        cart.push({meal: data, amount: 1});
        localStorage.setItem("cart", JSON.stringify(cart));
      } else {
        cartFound.amount += 1
        localStorage.setItem("cart", JSON.stringify(cart));
      }
  }

  return (
    <article className="meal-item">
      <img src={`http://localhost:3000/${data.image}`} alt={data.image} />
      <h3>{data.name}</h3>
      <p className="meal-item-price">${data.price}</p>
      <p className="meal-item-description">{data.description}</p>
      <div className="meal-item-actions">
        <button className="button" onClick={addToCart}>Add to cart</button>
      </div>
    </article>
  )
}