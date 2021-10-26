

export default function MoodButton(props) {

  return (
    <>
      <input onClick={props.handleMood} type="radio" name="mood" value={props.mood}/>
      <label >{props.mood}</label>
    </>
  )
}