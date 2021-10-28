import { Link } from 'react-router-dom'
import './Stats.css'

export default function Stats(props) {

  let userId = props.userId
  let date = new Date().toISOString().slice(0, 10)

  return (
    <section>
      <h4 className="stats-description">Click on the below if you would like to see your mood x habits on a particular date, or all your entries graphed out!</h4>
      <Link to={`/daily-stats/${userId}/${date}`}>
        <div className="stat-link">Daily</div>
        <img src="/daily.png" alt="" className="stats-img"/>
      </Link>
      <br />
      <br />
      <Link to={`/graph/${userId}`}>
        <div className="stat-link">Graph</div>
        <img src="/graph.png" alt="" className="stats-img"/>
      </Link>
      <br />
      <br />
      <br />
      <br />
      <Link to="/">
        <button className='format-btn'>Return home</button> 
      </Link>

    </section>
  )
}