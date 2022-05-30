function List(allList,handleTodo){
    return(
        <ul>
            {allList.map((elem,index)=>{
                return(
                    <div className="Comp">
                    <li key={index}>{elem}</li>
                    <button onClick={(e)=>{e.preventDefault();handleTodo(elem)}}>Concluir Tarefa</button>
                    </div>
                )
            })}
        </ul>
    )
}

export default List