import React, { useEffect, useState } from 'react';
import {TodoContext} from '../App';
import '../SCSS/AddOrUpdate.scss'

const AddOrUpdateTodo = (props) => {

    const isUpdate = props.isUpdate;
    const [index,setIndex] = useState(props.index ? props.index : '');
    const [newTodo,setnewTodo] = useState(props.value ? props.value : '')
    const [todoList, setTodoList] = React.useContext(TodoContext);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        setIndex(props.index);
        setnewTodo(props.value)
    },[props.index])

    //Add or Update
    const addNewTodo = (e) => {
        e.preventDefault();
        let tempTodoList = [];
        if(newTodo.trim() !== ''){
            if(isUpdate){
                let tempTodo = todoList.todos;
                tempTodo[index] = newTodo
                setTodoList({...todoList, todos:tempTodo})
                props.toggle()
            }
            else{
                tempTodoList = todoList.todos;
                tempTodoList.push(newTodo);
                setTodoList({...todoList, todos:tempTodoList})
                setnewTodo('')
            }
            
        }
        else{
            setErrorMsg('Enter some todo to add')
        }
    }

    //On Input change function
    const onInputChange = (evt) => {
        setnewTodo(evt.target.value)
        setErrorMsg('')
    }

    return(
        <div className='addOrUpdateComp'>
            <form id='addorupdateform' onSubmit={(e) => addNewTodo(e)}>
                <input placeholder='Add Todo' value={newTodo} type='text' onChange={(e) => onInputChange(e)}/>
                <button id='addTodo' onClick={(e) => addNewTodo(e)}> { isUpdate ? 'Update' : 'Add'}</button>
                <button id='cancelTodo' onClick={(e) => props.toggle(e,false)}>Cancel</button>
            </form>
            {
                errorMsg.length > 0 ? <span className='errorMsg'>{errorMsg}</span> : ''
            }
        </div>
        
    )
}

export default AddOrUpdateTodo;