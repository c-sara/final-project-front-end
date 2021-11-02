import axios from "axios";
import './DailyStats.css'
import { useState, useEffect } from "react";
import { useParams, useHistory, Link } from 'react-router-dom'

export default function DailyStats() {

  let params = useParams()
  let history = useHistory()

  let [mood, setMood] = useState('')
  let [habits, setHabits] = useState([])
  let [note, setNote] = useState('')
  let [date, setDate] = useState(params.date)

  let moodAvailable = false

  let userId = params.user_id

  let habitsArr = []

  // console.log(params)

  useEffect(() => {

    axios.get(`/api/moods/${userId}/${date}`)
      .then(res => {
        console.log(res.data)

        setMood(res.data.mood)
        setNote(res.data.comment)
        setHabits(res.data.habits)

        if (res.data.mood !== undefined) {
          moodAvailable = true
        }

        habitsArr = res.data.habits.map(habit => {
          <li>{habit}</li>
        })
      })
      .catch(err => {
        console.log(err)
        moodAvailable = false
      })
  }, [date])


  console.log(habitsArr)

  function handleDateChange(e) {
    setDate(e.target.value)
    history.push(`/daily-stats/${params.user_id}/${e.target.value}`)
  }

  return (
    <section>
      <h1>daily stats</h1>
      <input type="date" onChange={handleDateChange} value={date}/>

      <h4>
        <div style={{ 
          backgroundImage: `url("/blue.png")` 
          }} className="form-heading">
          mood of the day: 
        </div>
        <br/> 
        {mood}
      </h4>
      <h4>
        <div style={{ 
          backgroundImage: `url("/purple.png")` 
          }} className="form-heading">
          habits of the day:
        </div>
        <br />
        {moodAvailable ? habits.map(habit => <div> {habit} </div>) : undefined}
      </h4>
      <h4>
        <div style={{ 
          backgroundImage: `url("/green.png")` 
          }} className="form-heading">
          notes of the day: 
        </div>
        <br/> 
        {note}
      </h4>
      <Link to={`/stats/${userId}`}>
        <button className='format-btn'>Return to stats</button> 
      </Link>
      <br />
      <br />
      <Link to="/">
        <button className='format-btn'>Return home</button> 
      </Link>
    </section>
  )
}