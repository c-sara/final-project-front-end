import { Link } from 'react-router-dom'
import './Home.css'

export default function Home(props) {

  // function handleLogOut(e) {
  //   req.session.destroy()
  // }

  return (
    <section className='home-wrapper'>
      <h1>
        What would you like to do?
      </h1>
      <div className='home-links-wrapper'>
        <Link to={`/mood-form/${props.userId}`}>
          <div>
            Record my mood
          </div>
        </Link>

        <Link to={`/stats/${props.userId}`}>
          <div>
            View my stats
          </div>
        </Link>

        <div>
          Find resources (Coming soon)
        </div>

      </div>

      {/* <button onClick={handleLogOut}>Logout</button> */}
    </section>
  )
}