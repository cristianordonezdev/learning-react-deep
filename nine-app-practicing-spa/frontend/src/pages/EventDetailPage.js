import { useParams } from "react-router-dom"

export default function EventDetailPage() {
  const params = useParams();


  return (
    <>
      <h1>Event Detail Page:</h1>
      <h2>Event {params.id}</h2>
    </>
  )
}