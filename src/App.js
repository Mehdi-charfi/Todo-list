
import './App.css';
import Form from './components/form';
import Todolist from './components/list';
import {useEffect, useState} from 'react';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtredTodos, setFiltredTodos]= useState([]);
 useEffect (() =>{
   filtreHandler();

 },[todos,status]);
 
  const filtreHandler=() => {
    switch(status){
      case 'completed':
        setFiltredTodos(todos.filter((todo) =>todo.completed))
        break;
        case 'uncompleted':
        setFiltredTodos(todos.filter((todo) =>!todo.completed))
        break;
      default:
        setFiltredTodos(todos);
        break
        
    }
  }; 
  

  return (
    <div clasName='App'>
      <header>

        <h1>MY todo list</h1>
      </header>
      <Form
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setStatus={setStatus}
        />
      <Todolist setTodos={setTodos}
      todos={todos}
      filtredTodos={filtredTodos}
      ></Todolist>
      
    </div>
  );
}

export default App;
