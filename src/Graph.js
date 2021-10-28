import axios from "axios";
import { useState, useEffect, React } from "react";
import { Link } from 'react-router-dom'
import { Line } from 'react-chartjs-2';

export default function Graph(props) {

  // let [mood, setMood] = useState('')
  // let [habits, setHabits] = useState([])
  let [userData, setUserData] = useState([])

  let userId = props.userId
  let dateArr = []
  let moodArr = []
  let habitArr = []

  useEffect(() => {

    axios.get(`/api/moods/${userId}`)
      .then(res => {
        setUserData(res.data)
      })
  }, [])

  console.log(userData)

  userData.forEach(entry => {
    dateArr.push(entry.date)
    moodArr.push(entry.mood)
    habitArr.push(entry.habits)
  })

  console.log(dateArr)
  console.log(moodArr)
  console.log(habitArr)

  let formattedDateArr = dateArr.map(date => 
    date.slice(0,10).split('-').reverse().join('/')
  )

  console.log(formattedDateArr)

  // ['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']

  let formattedMoodArr = moodArr.map(mood => {
    if (mood === 'Terrible'){
      return mood = 1
    } else if (mood === 'Bad'){
      return mood = 2
    } else if (mood === 'Okay'){
      return mood = 3
    } else if (mood === 'Good'){
      return mood = 4
    } else if (mood === 'Amazing'){
      return mood = 5
    }
  })

  console.log(formattedMoodArr)

  let habitCountArr = habitArr.map(habits => habits.length)

  console.log(habitCountArr)



  const data = {
    labels: formattedDateArr,
    datasets: [
      {
        label: 'Mood',
        data: formattedMoodArr,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
        yAxisID: 'y-axis-1',
      },
      {
        label: 'Habit count',
        data: habitCountArr,
        fill: false,
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgba(54, 162, 235, 0.2)',
        yAxisID: 'y-axis-2',
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
        },
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-2',
          gridLines: {
            drawOnArea: false,
          },
        },
      ],
    },
  };


  return (
    <>
      <div className='header'>
        <h3 className='title'>your moods and habits over time</h3>
        <div className='links'>
        </div>
      </div>
      <Line data={data} options={options} />
      <br />
      <br />
      <Link to={`/stats/${userId}`}>
        <button className='format-btn'>Return to stats</button> 
      </Link>
      <br />
      <br />
      <Link to="/">
        <button className='format-btn'>Return home</button> 
      </Link>
    </>
  )
}