import { Link } from "react-router-dom"
export default function EventPage() {

  const events = [
    { id: 'e1', title: 'Programming for everyone', date: '2022-03-01' },
    { id: 'e2', title: 'JavaScript for beginners', date: '2022-03-15' },
    { id: 'e3', title: 'Web development bootcamp', date: '2022-03-30' },
    // Add more events here...
  ]
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}