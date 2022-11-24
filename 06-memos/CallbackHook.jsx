import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    //useCallback graba la función de forma que sólo se almacena en memoria una vez (porque no tiene dependencias en este caso)

    const incrementP = useCallback((value) => {
        console.log('incrementando');
        /*setCounter(counter + value); HACIENDO ESTO no se incrementa el counter, porque la función solo se lee una vez
        incluso ese valor, y cada vez que se ejecuta se va a encontrar con el valor inicial y no el nuevo valor.
        Por eso se debe usar callback para tomar el valor actual del counter. Como sigue*/
        setCounter((counter) => counter+value);
    }, []);

    return (
        <>
            <h1>useCallback Hook : {counter}</h1>
            <hr />

            <ShowIncrement increment={incrementP} />
        </>
    )
}
