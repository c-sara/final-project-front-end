import axios from "axios";
import { useState, useEffect } from "react";

export default function Graph(props) {

  // let [mood, setMood] = useState('')
  // let [habits, setHabits] = useState([])

  let userId = props.userId

  useEffect(() => {

    axios.get(`/api/moods/${userId}`)
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