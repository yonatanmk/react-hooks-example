import React, { useContext, useReducer } from 'react';
import TodosContext from './context';
import todosReducer from './reducer';
import TodoList from './components/TodoList'

export const UserContext = React.createContext()

const Todo = () => {
  const initialState = useContext(TodosContext)
  const [state, dispatch] = useReducer(todosReducer, initialState)
  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <TodoList />
    </TodosContext.Provider>
  )
}

export default Todo;
