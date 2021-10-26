import axios from "axios";
import { useState, useEffect } from "react";

export default function Graph() {

  let [mood, setMood] = useState('')
  let [habits, setHabits] = useState([])
  let [note, setNote] = useState('')

  useEffect(() => {

    axios.get('/api/moods/')
      .then(res => {
        console.log(res.data)
      })
  }, [])

  return (
    <section>
      <h1>graph</h1>
    </section>
  )
}