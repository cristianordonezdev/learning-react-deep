import { Link } from "react-router-dom";

function Products() {

  const products = [
    {id: "p1", title: "product 1"},
    {id: "p2", title: "product 2"},
    {id: "p3", title: "product 3"}
  ]
  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map(i => (
          <li key={i.id}>
            <Link to={`/detail-product/${i.id}`}>{i.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
export default Products;