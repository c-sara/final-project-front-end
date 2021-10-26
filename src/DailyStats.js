import axios from "axios";
import { useState, useEffect } from "react";

export default function DailyStats() {

  // let [mood, setMood] = useState('')
  // let [habits, setHabits] = useState([])
  // let [note, setNote] = useState('')

  useEffect(() => {

    axios.get('/api/moods/2021-10-24')
      .then(res => {
        console.log(res)
        console.log('hi')
      })
  }, [])

  return (
    <section>
      <h1>daily stats</h1>
    </section>
  )
}