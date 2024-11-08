import React from 'react'

const TodoList = (props) => {
    return (
        <div className='d-flex justify-content-center w-100 mt-3'>
            <li className='list-unstyled d-flex justify-content-between border border-dark rounded-3 px-2 py-1 w-25 bg-body-secondary'>
                {props.item}
                <span><i className="bi bi-trash" onClick={e => {
                    props.deleteItem(props.index)
                }}></i></span>
            </li>
        </div>
    )
}

export default TodoList