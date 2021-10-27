import { useState } from 'react';
import axios from 'axios'

export default function SignUp() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submit, setSubmit] = useState(false)

  // const errorMessage = <h3>Please fill out all details</h3>

  function handleName(e) {
    setName(e.target.value)
  }

  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function handlePassword(e) {
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(e.target)
    let userName = name
    let userEmail = email
    let userPassword = password

    setSubmit(true)

    if (userName === '' || userEmail === '' || userPassword === '') {
      console.log('please fill out all details')
    } else {
      axios
        .post('/sign-up', { userName, userEmail, userPassword })
        .then(res =>
          console.log(res))
        .catch(err =>
          console.log(err))
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Name</label>
      <input type="text" onChange={handleName}/>
      <br />
      <label htmlFor="">Email</label>
      <input type="email" onChange={handleEmail}/>
      <br />
      <label htmlFor="">Password</label>
      <input type="password" onChange={handlePassword}/>
      <br />

      <input type="submit" value="Submit" />

      {submit && (name === '' || email === '' || password === '') ? <h4> Please fill out all the details</h4> : <></>}

    </form>
    </>
  )
}