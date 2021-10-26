import './App.css';
import Welcome from './Welcome';
import Home from './Home';
import MoodForm from './MoodForm';
import Stats from './Stats';
import DailyStats from './DailyStats';
import Graph from './Graph';

import { Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Link to='/'>
        <h1>MOOD</h1>
      </Link>

      <Switch>
        <Route path='/welcome/:id'>
          <Welcome />
        </Route>
        <Route path='/mood-form'>
          <MoodForm />
        </Route>
        <Route path='/stats'>
          <Stats />
        </Route>
        <Route path='/daily-stats'>
          <DailyStats />
        </Route>
        <Route path='/graph'>
          <Graph />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
