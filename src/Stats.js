import { Link } from 'react-router-dom'

export default function Stats(props) {

  let userId = props.userId
  let date = new Date().toISOString().slice(0, 10)

  return (
    <section>
      <Link to={`/daily-stats/${userId}/${date}`}>
        <div>Daily</div>
      </Link>
      <Link to={`/graph/${userId}`}>
        <div>Graph</div>
      </Link>

    </section>
  )
}