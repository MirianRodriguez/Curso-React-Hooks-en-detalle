import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset} = useCounter(15);
    return (
        <>
            <h1>Counter hook: {counter}</h1>
            <hr />
            <button className="btn btn-primary" onClick={()=>increment(1)}>+1</button>
            <button className="btn btn-primary" onClick={reset}>RESET</button>
            <button className="btn btn-primary" onClick={()=>decrement(2)}>-1</button>
        </>
    )
}
