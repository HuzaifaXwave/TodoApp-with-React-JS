import { Box } from '@mui/material'
import React, { useState } from 'react'

const TodoApp = (props) => {
    const [inputTxt, setInputTxt] = useState([])
    return (
        <Box className='d-flex justify-content-center align-items-center gap-2'>
            <input className='p-2 border-1 rounded-2' onChange={e => { setInputTxt(e.target.value) }} value={inputTxt} type="text" placeholder='Enter your task' />
            <button className='px-3 py-2 border-1 rounded-2' onClick={() => {
                props.addList(inputTxt)
                setInputTxt("")
            }} >Add</button>
        </Box>
    )
}

export default TodoApp