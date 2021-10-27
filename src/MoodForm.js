// import RecordMood from "./RecordMood";
// import RecordHabits from "./RecordHabits";
// import RecordNotes from "./RecordNotes";
import MoodButton from './MoodButton'
import HabitButton from './HabitButton'

import { Component } from 'react'
import axios from 'axios'

class MoodForm extends Component {
  
  state = {
    mood: '',
    habits: [
      {id: 1, value: 'Eat healthy', isChecked: false},
      {id: 2, value: 'Drink lots of water', isChecked: false},
      {id: 3, value: 'Adequate sleep', isChecked: false},
      {id: 4, value: 'Exercise', isChecked: false},
      {id: 5, value: 'Practice meditation/mindfulness', isChecked: false},
      {id: 6, value: 'Practice gratitude', isChecked: false},
      {id: 7, value: 'Spend time with friends/family', isChecked: false},
      {id: 8, value: 'Complete a personal goal', isChecked: false}
    ],
    note: ''
  }
  
  moodsArr = ['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']

  selectedHabits() {
    let habits = this.state.habits
    let selectedHabits = []

    habits.forEach(habit => {
      if (habit.isChecked) {
        selectedHabits.push(habit.value)
      }
    })

    return selectedHabits

  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('form submitted')
    let userId = this.props.userId
    let mood = this.state.mood
    let habits = this.selectedHabits()
    let note = this.state.note
    let date = new Date().toISOString().slice(0, 10)

    axios
      .post('/api/moods', { userId, mood, habits, note, date })
      .then(res =>
        console.log(res))
      .catch(err =>
        console.log(err))

  }

  handleMood = (e) => {
    this.setState({
      mood: e.target.value
    })

  }

  handleChecked = (targetId) => {
    let habits = this.state.habits

    this.setState({
      habits: habits.map(habit => {
        if (habit.id === targetId) {
          return {...habit, isChecked: !habit.isChecked}
        } else {
          return {...habit}
        }
      })

    })

  }

  handleTextAreaChange = (e) => {
    this.setState({
      note: e.target.value
    })
  }

  render() {
    console.log(this.props.userId)
    return (
      <section>
        
        <form onSubmit={this.handleSubmit}>
          <h1>How are you feeling?</h1>
          
          {this.moodsArr.map((mood, idx) => 
            <MoodButton mood={mood} key={idx} handleMood={this.handleMood}/>
          )}
  
          <h1>What have you been up to today?</h1>
      
          {this.state.habits.map((habit, idx) => 
            <HabitButton habit={habit} key={idx} handleChecked={this.handleChecked}/>
          )}
  
          <h1>Notes</h1>
          <h6>Optional: You are able to record anything here. For example: highlights/lowlights of the day, daily affirmations, food journal, etc</h6>
          <textarea onChange={this.handleTextAreaChange}></textarea>
          <br />
  
          <input type="submit" value="Submit" />
  
        </form>
      </section>
    )
  }
}

export default MoodForm
