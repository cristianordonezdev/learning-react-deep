import { useParams } from "react-router-dom"

export default function DetailProduct() {
  const params = useParams();

  return (
    <>
      <h1>Detail product</h1>
      <p>Id: {params.id}</p>
    </>
  )
}