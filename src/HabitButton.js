

export default function habitButton(props) {

  const { id, value } = props.habit

  return (
    <>
      <input onClick={() => props.handleChecked(id)} type="checkbox" name={id} value={id}/>
      <label >{value}</label>
      <br />
    </>
  )
}