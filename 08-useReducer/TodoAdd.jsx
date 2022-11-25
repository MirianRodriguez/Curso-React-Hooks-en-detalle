import { useForm } from "../hooks/useForm"

export const TodoAdd = ({onNewTodo}) => {

    //usamos el customHook creado antes para manejo de formularios
    const {description, onInputChange, onResetForm} = useForm({description:''});

    const onHandleSubmit = (event) => {
        event.preventDefault();

        if(description.length<=1) return;
        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        }
        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <form onSubmit={onHandleSubmit}>
            <input type="text"
                name='description'
                placeholder='¿Qué hay que hacer?'
                className='form-control' 
                value={description}
                onChange={onInputChange}
                />
            <button className="btn btn-primary mt-1" type='submit'>
                Agregar
            </button>
        </form>
    )
}
