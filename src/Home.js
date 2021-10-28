import axios from 'axios'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home(props) {

  function handleLogOut(e) {
    axios.delete('/api/logout')
  }

  return (
    <section className='home-wrapper'>
      <h3>hello {props.userName}. <br/> what would you like to do?</h3>

      <div className='home-links-wrapper'>
        <Link to={`/mood-form/${props.userId}`}>
          <div className='home-links'>
            Record my mood
          </div>
          <img src="/form.png" alt="" className="home-img"/>
        </Link>

        <Link to={`/stats/${props.userId}`}>
          <div className='home-links'>
            View my stats
          </div>
          <img src="/graph.png" alt="" className="home-img"/>
        </Link>

        <div className='home-links'>
          View Resources <br/> (Coming soon)
        </div>

      </div>
    
      <form onSubmit={handleLogOut} method="delete">

        <input type="submit" value="Logout" className='format-btn'/>

      </form>

    </section>
  )
}