import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header'
import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';
export const TodoContext = createContext([{}, () => {}])
const  App = ()  => {
  const [todoList, setTodoList] = useState({
    todos : [],
    search : ''
  })
  return (
    <div className="App">
      <div className = 'todo-container'>
        <TodoContext.Provider value={[todoList,setTodoList]}>
            <Header />
            <AddTodo />
            <TodoList />    
        </TodoContext.Provider>
      </div>
    </div>
  );
}

export default App;
