import React, { useLayoutEffect, useRef, useState } from 'react'

export const Quote = ({ author, quote }) => {
    const pRef = useRef();

    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const { height, width } = pRef.current.getBoundingClientRect();
        //console.log(pRef.current.getBoundingClientRect());
        setBoxSize({ height, width });
    }, [quote])

    return (
        <>
            <blockquote className="blockquote text-center"
                style={{ display: 'flex' }}>
                <p ref={pRef}>{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>
            <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}