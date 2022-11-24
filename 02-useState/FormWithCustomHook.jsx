import { useForm } from '../hooks/useForm';
import { Message } from './Message';

export const FormwithCustomHook = () => {

    const {username, email, password, onInputChange, onClickReset} = useForm({username:'', email:'', password:''});


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

            <input
                type="password"
                className="form-control mt-3"
                name='password'
                placeholder='unpass'
                value={password} 
                onChange={onInputChange}/>

            <button onClick={onClickReset} className="btn btn-danger mt-3">Borrar</button>

               
        </>
    )
}
