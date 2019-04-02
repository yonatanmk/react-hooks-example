import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import uuidv4 from 'uuid/v4'
import TodosContext from '../context';

const TodoList = () => {
  const [todo, setTodo] = useState('')
  const { state: { currentTodo = {} }, dispatch } = useContext(TodosContext)

  useEffect(() => {
    if (currentTodo.text) {
      setTodo(currentTodo.text)
    } else {
      setTodo('')
    }
  }, [currentTodo.id])

  const handleSubmit = async e => {
    e.preventDefault()
    if (currentTodo.text) {
      const response = await axios.patch(`http://localhost:3000/todos/${currentTodo.id}`, {
        text: todo,
      })
      dispatch({ type: 'UPDATE_TODO', payload: response.data })
    } else {
      const response = await axios.post('http://localhost:3000/todos', {
        id: uuidv4(),
        text: todo,
        complete: false,
      })
      dispatch({ type: 'ADD_TODO', payload: response.data })
    }
    setTodo('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-center p-5" >
      <input 
        type="text"
        className="border-black border-solid border-2"
        onChange={e => setTodo(e.target.value)}
        value={todo}
      />
    </form>
  )
}

export default TodoList;
