import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'

export default function Login(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submit, setSubmit] = useState(false)

  let history = useHistory()

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    let userEmail = email
    let userPassword = password

    setSubmit(true)

    if (userEmail === '' || userPassword === '') {
      console.log('please fill out all details')
    } else {
      axios
        .post('/login', { userEmail, userPassword })
        .then(res => {
          console.log(res.data)
          if (res.data.isLoggedIn) {
            props.setUserId(res.data.userId)
            history.push('/')
          }
        })
        .catch(err =>
          console.log(err))
    }
  }

  return (
    
    <section>
      <h2>Welcome</h2>

      <h4>Sign in below</h4>

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input type="text" onChange={handleEmail}/>
        <br />
        <label htmlFor="">Password</label>
        <input type="password" onChange={handlePassword}/>
        <br />
        <input type="submit" value="Login" />
      </form>

      {submit && (email === '' || password === '') ? <h4> Please fill out all of your login details</h4> : <></>}

      <h4>Don't have an account?</h4>
      <Link to='/sign-up'>
        Sign Up
      </Link>
    </section>
  )
}