import DailyStats from './DailyStats'
import Graph from './Graph'
import { Switch, Route, Link } from 'react-router-dom'

export default function Stats() {

  return (
    <section>
      <Link to='/daily-stats'>
        <div>Daily</div>
      </Link>
      <Link to='/graph'>
        <div>Graph</div>
      </Link>

    </section>
  )
}