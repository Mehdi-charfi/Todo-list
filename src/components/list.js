import Todo from "./Todo";

function Todolist ({todos,setTodos,filtredTodos })
{
    
    return (

        <div className="todo-container">
            <ul className="todo-list">
                {filtredTodos.map((todo)=>(
                 <Todo 
                    setTodos={setTodos}
                    todos={todos}
                    key={todo.id}
                    todo={todo}
                    text={todo.text} 
                    id={todo.id}/>
                ))}
            </ul>
        </div>

    );


}
export default Todolist;