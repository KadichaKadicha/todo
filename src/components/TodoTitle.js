import React from 'react';

const TodoTitle = ({todos}) => {
    return (
        <div className="d-flex justify-content-between align-items-center mt-5">
           <h2>TodoList</h2>
            <div>
                <span className="mr-2">Total: {todos.length}</span>
                <span>Total done:{todos.filter(el=>el.done).length}</span>
            </div>
        </div>
    );
};

export default TodoTitle;