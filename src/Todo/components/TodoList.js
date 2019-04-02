import React, { useContext } from 'react';
import TodosContext from '../context';

const TodoList = () => {
  const { state, dispatch } = useContext(TodosContext)
  const title = state.todos.length > 0 ? `${state.todos.length} Todos` : 'Nothing To Do'
  console.log(state)
  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="text-bold">{title}</h1>
      <ul className="list-reset text-white p-0">
        {state.todos.map(todo => (
          <li 
            key={todo.id}
            className="flex items-center bg-orange-dark border-black border-dashed border-2 my-2 p-4"
          >
            <span 
              className={`flex-1 ml-12 cursor-pointer${todo.complete ? ' line-through text-grey-darkest' : ''}`}
              onDoubleClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo })}
            >
              {todo.text}
            </span>
            <button>
              <img 
                src="https://icon.now.sh/edit/0050c5"
                alt="Edit Icon"
                className="h-6"
                onClick={() => dispatch({ type: 'SET_CURRENT_TODO', payload: todo })}
              />
            </button>
            <button>
              <img 
                src="https://icon.now.sh/delete/8b0000"
                alt="Delete Icon"
                className="h-6"
                onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo })}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList;
