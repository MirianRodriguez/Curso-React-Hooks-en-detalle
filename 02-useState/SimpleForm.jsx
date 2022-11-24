import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Nick',
        email: 'nick@gmail.com',
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    //Podemos definir useEffects para disparar acciones especiales en ciertos momentos.

    //1- si queremos que se ejecute sólo en la primera vez que se renderiza, se mandan las dependencias vacías
    useEffect(() => {
      //console.log('useEffect que aparece la primera vez')

    }, []);

    //2- si queremos que se ejecute en cada renderización, no se mandan las dependencias
    useEffect(() => {
        //console.log('useEffect que aparece siempre');
    })

    //3- si queremos que se ejecute sólo cuando se cambia cierta variable, la agrego al arreglo de dep
    useEffect(()=>{
        //console.log('se cambió el formState')
    }, [formState]);

    useEffect(()=>{
        //console.log('se cambió el email')
    }, [email]);


    return (
        <>
            <h1>Form</h1>
            <hr />
            <input
                type="text"
                className="form-control"
                name='username'
                placeholder='Nick'
                value={username} 
                onChange={onInputChange}/>

            <input
                type="text"
                className="form-control mt-3"
                name='email'
                placeholder='Nick@gmail.com'
                value={email} 
                onChange={onInputChange}/>

            {
                (username === 'nick2') &&  <Message/>
            }

               
        </>
    )
}
