import React from 'react';
import TodoList from "./components/TodoList";
const App = () => {
  return (
      <body  >
      <div className="container ">
          <div className="row">
              <div className="col-md-6 offset-md-3">
                  <TodoList />
              </div>
          </div>
      </div>
      </body>
  )
}

export default App;
