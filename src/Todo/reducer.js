export default function reducer(state, action) {
  switch(action.type) {
    case 'GET_TODOS':
      return {
        ...state,
        todos: action.payload,
      }
    case 'ADD_TODO':
      // if (!action.payload) {
      //   return state;
      // }
      // if (state.todos.findIndex(todo => todo.text === action.payload) > -1) {
      //   return state;
      // }
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }
    case 'SET_CURRENT_TODO':
      return {
        ...state,
        currentTodo: action.payload,
      }
    case 'UPDATE_TODO':
      // if (!action.payload) {
      //   return state;
      // }
      // if (state.todos.findIndex(todo => todo.text === action.payload) > -1) {
      //   return state;
      // }
      const updatedTodos = state.todos.map(todo => todo.id === state.currentTodo.id ? action.payload : todo)
      return {
        ...state,
        todos: updatedTodos,
        currentTodo: {},
      }
    case 'TOGGLE_TODO':
      const toggledTodos = state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
      return {
        ...state,
        todos: toggledTodos,
      }
    case 'REMOVE_TODO':
      const filteredTodos = state.todos.filter(todo => todo.id !== action.payload.id )
      const newCurrentTodo = state.currentTodo.id === action.payload.id ? {} : state.currentTodo
      return {
        ...state,
        todos: filteredTodos,
        currentTodo: newCurrentTodo
      }
    default:
      return state;
  }
}