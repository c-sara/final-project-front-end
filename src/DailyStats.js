import userEvent from "@testing-library/user-event";
import axios from "axios";
import { useState, useEffect } from "react";

export default function DailyStats() {

  let currentDate = new Date().toISOString().slice(0, 10)

  let [mood, setMood] = useState('')
  let [habits, setHabits] = useState([])
  let [note, setNote] = useState('')
  let [date, setDate] = useState(currentDate)


  useEffect(() => {

    axios.get(`/api/moods/${date}`)
      .then(res => {
        console.log(res.data)

        setMood(res.data.mood)
        setHabits(res.data.habits)
        setNote(res.data.comment)
      })
  }, [date])

  function handleDateChange(e) {
    setDate(e.target.value)
  }

  return (
    <section>
      <h1>daily stats</h1>
      <input type="date" onChange={handleDateChange}/>
      <h1>{mood}</h1>
      <h1>{habits}</h1>
      <h1>{note}</h1>
    </section>
  )
}