import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import List from './Components/List';
import AddList from './Components/AddList';
function App() {
  const [add,setAdd] = useState([])
  const [input,setInput] = useState("")
  
  function AddToDo(toDo){
    setAdd([...add,toDo])
  }
  function Remove(text){
      const filter = add.filter((e)=>{return e !== text})
      setAdd(filter)
  }
 console.log(input,add) 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Lista</h1>
        {AddList(AddToDo,setInput,input)}
        {List(add,Remove)}
      </header>
    </div>
  );
}

export default App;
