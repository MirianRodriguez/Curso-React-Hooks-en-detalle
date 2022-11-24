import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks/useCounter'


const heavyStuff = (iterations) => {
  for (let i = 0; i < iterations; i++) {
    console.log('iterando..');
    
  }
  return `${iterations} realizadas`;
}

export const MemoHook = () => {
    const {counter, increment} = useCounter();
    const [show, setShow] = useState(true);

    //useMemo memoriza el valor devuelto por una función y sólo lo cambia cuando cambia el valor de una de sus dependencias
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);
  return (
    <>
        <h1>Counter <small>{counter}</small></h1>
        <h3>{memorizedValue}</h3>
        <hr />
        <button className="btn btn-primary" onClick={()=>increment()}>+1</button>
        <button className='btn btn-outline-primary'
        onClick={()=>setShow(!show)} >Show/Hide {JSON.stringify(show)}</button>
    </>
  )
}
