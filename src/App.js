import './App.css';
import SignIn from './Login';
import SignUp from './SignUp';
import Home from './Home';
import Login from './Login';
import MoodForm from './MoodForm';
import Stats from './Stats';
import DailyStats from './DailyStats';
import Graph from './Graph';

import { useState } from 'react';
import { Switch, Route, Link, Redirect, useHistory } from 'react-router-dom'

function App() {

  const [userId, setUserId] = useState('')
  const [userName, setUserName] = useState('')

  let history = useHistory();

  return (
    <div className="App">

      <Link to='/' >
        <h1 className="header-title" >mood x habits</h1>
      </Link>

      <Switch>
        <Route path='/sign-in'>
          <SignIn />
        </Route>
        <Route path='/login'>
          <Login setUserId={setUserId} setUserName={setUserName}/>
        </Route>
        <Route path='/sign-up'>
          <SignUp setUserId={setUserId} setUserName={setUserName}/>
        </Route>
        <Route path='/mood-form/:user_id'>
          {userId ? <MoodForm userId={userId} history={history}/> : <Redirect to='/login' />}
        </Route>
        <Route path='/stats/:user_id'>
          {userId ? <Stats userId={userId}/> : <Redirect to='/login' />}
        </Route>
        <Route path='/daily-stats/:user_id/:date'>
          {userId ? <DailyStats userId={userId}/> : <Redirect to='/login' />}
        </Route>
        <Route path='/graph/:user_id/'>
          {userId ? <Graph userId={userId}/> : <Redirect to='/login' />}
        </Route>
        <Route path='/'>
          {userId ? <Home userId={userId} userName={userName}/> : <Redirect to='/login' />}
        </Route>
      </Switch>

    </div>
  );
}

export default App;
