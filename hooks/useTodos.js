import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

//pasa el json string a objetos. Es el opuesto al stringify
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        //guarda en el localStorage los todos en formato string porque no se pueden guardar objetos
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    /*Estas funciones van a ser entregadas a los componentes hijos, los cuales las usarán cuando necesiten.
    Así cada componente tiene una responsabilidad*/
    const handleNewTodo = (todo) => {
        //console.log( todo );

        //creo la acción
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }

        //despacho la acción del reducer
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {

        const action = {
            type:'[TODO] Remove Todo',
            payload: id,
        }
        dispatch(action);
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id,
        }
        dispatch(action);
    }

    const remainingTodosCount = () => {
        return (todos.filter(todo => !todo.done).length);
    }

    const todoCount = () => {
        return todos.length;
    }

  return {
    todos,
    todoCount,
    remainingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }
}
