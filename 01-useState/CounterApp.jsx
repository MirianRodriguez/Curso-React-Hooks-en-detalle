import React, { useState } from 'react'

export const CounterApp = () => {

    //para ver el manejo del estado de un objeto
    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });
    //desestructuro
    const { counter1, counter2, counter3 } = state;

    return (
        <>
            <h1>Counter 1: {counter1}</h1>
            <h1>Counter 2: {counter2}</h1>
            <h1>Counter 3: {counter3}</h1>

            <button
                className="btn btn-primary"
                onClick={
                    //así se evita hacer:
                    // counter1:counter1+1,
                    // counter2:counter2,
                    // counter3:counter3

                    // ya que solo quiero cambiar el valor del counter1 y los otros quiero conservar el valor
                    () => setCounter(
                        {
                            ...state,
                            counter1: counter1 + 1
                        }
                    )
                }>+1</button>
        </>
    )
}
