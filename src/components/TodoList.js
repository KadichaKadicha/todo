import React , {useState, useEffect} from 'react';
import TodoTitle from "./TodoTitle";
import tasks from "../tasks";
import shortId from 'shortid'
import TodoListItem from "./TodoListItem";

const TodoList = () => {
    const [todos, setTodos]=useState([])
    const [newTodo, setNewTodo]=useState('')
    useEffect(()=>{
        setTodos(tasks)
    },[])
    const addTodo=()=>{
        const addedTodo={
            id:shortId.generate(),
            title:newTodo,
            done:false
        }
        setTodos([...todos, addedTodo])
        setNewTodo('')

    }
    const deleteTodo=(delId)=>{
        const besideTodo=todos.filter((el)=>el.id !== delId)
   setTodos(besideTodo)
    }

    const updateTodo=(update, id)=>{
        const updateTodos=todos.map(el=>el.id === id ? {...el, title:update} : el)
        setTodos(updateTodos)
    }
    const doneTodo=( id)=>{
        const doneTodos=todos.map(el=>el.id === id ? {...el, done:!el.done} : el)
        setTodos(doneTodos)
    }
    return (
        <div>
            <TodoTitle todos={todos} />
            <ul className="list-group mb-5">
                {
                    todos.map(todo=>(
                        <TodoListItem todo={todo} key={todo.id} deleteTodo={deleteTodo} updateTodo={updateTodo} doneTodo={doneTodo}/>
                    ))
                }
            </ul>
            <input type="text" className="form-control"
                   value={newTodo}
            onChange={e=>setNewTodo(e.target.value)
            }

            />
            <button className="btn btn-primary w-100 mt-2"
            onClick={addTodo}
                    disabled={newTodo.length<5}
            >Add task+</button>
        </div>
    );
};

export default TodoList;