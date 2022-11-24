import React from 'react'
import { LoadingQuote } from '../03-example/LoadingQuote';
import { Quote } from '../03-example/Quote';
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch'

export const Layout = () => {

    const { counter, increment } = useCounter(1);

    //llama a mi custom hook
    const { data, isLoading, hasError } = useFetch('https://www.breakingbadapi.com/api/quotes/' + counter);

    //si no está cargando, desestructura lo que hay en data primera posicion
    const { quote, author } = !isLoading && data[0];

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />
            {isLoading ?
                (
                    <LoadingQuote />
                ) : (
                    <Quote author={author} quote={quote} />
                )
            }
            <button className="btn btn-primary" onClick={() => increment(1)}>Siguiente cita</button>
        </>
    )
}
