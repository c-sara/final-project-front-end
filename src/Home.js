import { Link } from 'react-router-dom'

export default function Home() {

  return (
    <section>
      <h1>
        What would you like to do?
      </h1>

      <Link to='/mood-form'>
        <div>
          Record my mood
        </div>
      </Link>

      <Link to='/stats'>
        <div>
          View my stats
        </div>
      </Link>

      <div>
        Find resources
      </div>
    </section>
  )
}