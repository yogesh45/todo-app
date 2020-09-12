import React from 'react';
import '../SCSS/Todo.scss';
import * as feather from 'react-feather';
import {TodoContext} from '../App';
import AddOrUpdateTodo from './AddOrUpdateTodo';

const Todo = (props) => {
    const todo = props.todo
    const [todoList, setTodoList] = React.useContext(TodoContext);
    const [editIndex,setEditIndex] = React.useState(null);

    //delete Todo 
    const deleteTodo = (index) => {
        let tempTodo = todoList.todos;
        tempTodo.splice(index,1);
        setTodoList({...todoList, todos:tempTodo})
    }

    //edit Todo
    const editTodo = (index) => {
        setEditIndex(index)
    }

    //Update Todo
    const toggleInput = (e) => {
        setEditIndex(null)
    }
    return(
        <div key={props.todoIndex} className='todo'>
            <div className='todo-name'>
                <span>Task</span>
                {
                    editIndex !== props.todoIndex ? <p>{todo}</p> : 
                        <AddOrUpdateTodo isUpdate={true} index={editIndex} value={todo} toggle={toggleInput} />
                }
            </div>
            <feather.Edit2 className={ editIndex !== props.todoIndex ? 'todo-edit' : 'todo-edit hidden'} onClick={() => editTodo(props.todoIndex)}/> 
            <feather.Trash className='todo-delete' onClick={() => deleteTodo(props.todoIndex)}/>
        </div>
    )
}

export default Todo;