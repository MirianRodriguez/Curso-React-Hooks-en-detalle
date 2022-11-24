import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {

        //es necesario crear esta función para poder pasarla como referencia tanto al addEvent como al removeEvent.
        const onMouseMove = ({x, y}) => {
            const coords = {x, y};
            console.log(coords);
        }

        /*cuando el componente se monta o renderiza, agrego el escuchador de evento a la ventana*/
        window.addEventListener('mousemove', onMouseMove);

        return () => {
            //cuando el componente se desmonta
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, [])

    return (
        <>
            <h3>Usuario ya existe</h3></>
    )
}
