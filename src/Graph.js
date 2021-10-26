import axios from "axios";
import { useState, useEffect } from "react";

export default function Graph() {

  let [mood, setMood] = useState('')
  let [habits, setHabits] = useState([])

  useEffect(() => {

    axios.get('/api/moods/')
      .then(res => {
        console.log(res.data)
        let dataArr = res.data
        let moodArr = []

        dataArr.forEach(data => {
          moodArr.push(data.mood)
        })

        console.log(moodArr)
      })
  }, [])

  return (
    <section>
      <h1>graph</h1>
    </section>
  )
}