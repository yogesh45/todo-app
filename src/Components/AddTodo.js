import React, { useState } from 'react';
import '../SCSS/AddTodo.scss'
import AddOrUpdateTodo from './AddOrUpdateTodo';

const AddTodo = () => {

    const [showInput,setShowInput] = useState(false);

    //Toggle Todo input
    const toggleInput = (evt,toggle) => {
        evt.stopPropagation()
        setShowInput(toggle)
    }

    return (
        <div className='addTodo' onClick={(e) => toggleInput(e,true)}>
            <span> + </span> NEW TASK
            {
                showInput ? 
                    <div className='todo-input'>
                        <AddOrUpdateTodo isUpdate={false} toggle = {toggleInput} />
                        
                    </div> : ''
            }
            
        </div>
    )
}

export default AddTodo;