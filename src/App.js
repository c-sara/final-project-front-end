import './App.css';
// import Welcome from './Welcome';
import SignUp from './SignUp';
import Home from './Home';
import Login from './Login';
import MoodForm from './MoodForm';
import Stats from './Stats';
import DailyStats from './DailyStats';
import Graph from './Graph';

import { useState, useEffect } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import axios from 'axios';

function App() {

  const [userId, setUserId] = useState('')
  const [redirectToLogin, setRedirectToLogin] = useState(false)

  useEffect(() => {
    checkLoggedIn()
  }, [])

  function checkLoggedIn() {

    axios
      .get('/api/logged-in')
      .then(dbRes => {
        if (!dbRes.data.isLoggedIn) {
          setRedirectToLogin(true)
        }
      })
  }

  return (
    <div className="App">
      {redirectToLogin && <Redirect to='/login' />}
      <Link to='/'>
        <h1>MOOD</h1>
      </Link>

      <Switch>
        {/* <Route path='/welcome/:id'>
          <Welcome />
        </Route> */}
        <Route path='/login'>
          <Login setUserId={setUserId}/>
        </Route>
        <Route path='/sign-up'>
          <SignUp />
        </Route>
        <Route path='/mood-form/:user_id'>
          <MoodForm userId={userId}/>
        </Route>
        <Route path='/stats/:user_id'>
          <Stats userId={userId}/>
        </Route>
        <Route path='/daily-stats/:user_id/:date'>
          <DailyStats userId={userId}/>
        </Route>
        <Route path='/graph/:user_id/'>
          <Graph userId={userId}/>
        </Route>
        <Route path='/'>
          <Home userId={userId}/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
