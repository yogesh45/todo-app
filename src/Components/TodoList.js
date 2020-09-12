import React, { useContext } from 'react'
import Todo from './Todo';
import '../SCSS/TodoList.scss';
import {TodoContext} from '../App';

const TodoList = () => {
    const [todoList] = useContext(TodoContext);

    return (
        <div className='todo-list'>
            {
                todoList.todos && todoList.todos.length > 0  ? todoList.todos.map((todo , index) => {
                    return(
                        <Todo key={index} todo={todo} todoIndex={index}/>
                    )
                }) : 
                <div className = 'no-todo'>
                    No Todo Added
                </div>
            }
        </div>
    )
}
export default TodoList;