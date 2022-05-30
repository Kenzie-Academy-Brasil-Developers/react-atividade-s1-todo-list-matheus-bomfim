function AddList(AddToDo,setInput,input){
  return(
  <form onSubmit={(e)=>{e.preventDefault()}}>
    <input type="text" placeholder='Digite Aqui' onChange={(e)=>{setInput(e.target.value)}}></input>
    <button onClick={(e)=>{e.preventDefault();AddToDo(input)}}>Adicionar</button>
  </form>
  )
}

export default AddList