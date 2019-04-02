import React, { useState, useEffect, useContext, useReducer } from 'react';
import axios from 'axios'
import TodosContext from './context';
import todosReducer from './reducer';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';

const useAPI = endpoint => {
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await axios.get(endpoint)
    setData(response.data)
  }

  return data;
}

const Todo = () => {
  const initialState = useContext(TodosContext)
  const [state, dispatch] = useReducer(todosReducer, initialState)
  const savedTodos = useAPI('http://localhost:3000/todos')

  useEffect(() => {
    dispatch({
      type: 'GET_TODOS',
      payload: savedTodos,
    })
  }, [savedTodos])

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <TodoForm />
      <TodoList />
    </TodosContext.Provider>
  )
}

export default Todo;
