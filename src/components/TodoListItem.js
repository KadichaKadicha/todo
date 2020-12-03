import React, {useState} from 'react';

const TodoListItem = ({todo , deleteTodo, updateTodo, doneTodo}) => {
    const [editable, setEditable]=useState(false)
    const [updated, setUpdated]=useState(todo.title)
const handleSave=(id)=>{
        updateTodo(updated,id)
    setEditable(false)
}
const isDoneStyle={
        textDecoration: "line-through",
    cursor: "pointer",
    color: "red"
}
    return (
        <div >
            <li  className="list-group-item d-flex align-items-center justify-content-between">
                {editable ? <input type="text" value={updated} onChange={e=>setUpdated(e.target.value)}/> :
                   <h4 style={todo.done ? isDoneStyle : null} onClick={()=>doneTodo(todo.id)}> {todo.title}</h4> }
                <div>
                    <button className="btn btn-warning mr-2" onClick={()=>editable ? handleSave(todo.id) : setEditable(true)}> {editable ? 'Save' :'Edit'}</button>
                    <button className="btn btn-danger"
                            onClick={()=>{deleteTodo(todo.id)
                        }}>del</button>
                </div>
            </li>
        </div>
    );
};

export default TodoListItem;