const initialState = [{
    id: 1,
    todo: 'Juntar la piedra del alma',
    done: false,
}];


//un reducer es una función normal que recibe: un estado y una acción
const todoReducer = (state = initialState, action = {}) => {

    //el reducer tiene una serie de acciones que sabe cómo atender
    //si se le pide algo que sabe hacer lo hace
    if(action.type === '[TODO] add todo'){
        return [...state, action. payload];
    }

    //si se le pide algo que no sabe hacer retorna el estado anterior
    return state;
}

let todos = todoReducer(); //se guarda el estado del reducer

console.log({state:todos});

const newTodo = {
    id:2, 
    todo: 'Juntar la piedra del poder',
    done:false,
}

//creo la acción a enviar al reducer
const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}


//llamada al reducer. Almacena el nuevo state
todos = todoReducer(todos, addTodoAction);

console.log({state:todos});