import React from 'react'
import { useDispatch } from 'react-redux'
import { addNumber } from '../features/numberSlice'

const NumberButton = ({children}) => {
  const dispatch = useDispatch()
  return (
    <button onClick={()=>dispatch(addNumber(children))} className={children === "0" ? 'numberbutton numberbutton-zero' : 'numberbutton'}>
        {children}
    </button>
  )
}

export default NumberButton
