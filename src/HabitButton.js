

export default function habitButton(props) {

  const { id, value } = props.habit

  return (
    <label >
      <input onClick={() => props.handleChecked(id)} type="checkbox" name={id} value={id}/>
      {value}
    </label>
  )
}