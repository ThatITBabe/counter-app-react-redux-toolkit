import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from './Redux/counterSlice'

const Counter = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
        <h1>Count: {count}</h1>
        <div className="button">
            <button className='btn btn-success' onClick={() => dispatch(increment())}>Increment</button>
            <button className='btn btn-secondary m-3' onClick={() => dispatch(reset())}>Reset</button>
            <button className='btn btn-danger' onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    </div>
  )
}

export default Counter