import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom'

export default function DailyStats() {

  let params = useParams()
  let history = useHistory()

  let [mood, setMood] = useState('')
  let [habits, setHabits] = useState([])
  let [note, setNote] = useState('')
  let [date, setDate] = useState(params.date)

  let userId = params.user_id

  console.log(params)

  useEffect(() => {

    axios.get(`/api/moods/${userId}/${date}`)
      .then(res => {
        console.log(res.data)

        setMood(res.data.mood)
        setHabits(res.data.habits)
        setNote(res.data.comment)
      })
  }, [date])

  function handleDateChange(e) {
    setDate(e.target.value)
    history.push(`/daily-stats/${params.user_id}/${e.target.value}`)
  }

  return (
    <section>
      <h1>daily stats</h1>
      <input type="date" onChange={handleDateChange} value={date}/>
      <h1>{mood}</h1>
      <h1>{habits}</h1>
      <h1>{note}</h1>
    </section>
  )
}