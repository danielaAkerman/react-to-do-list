import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';
import './App.css';

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []) // Lo que retorna la función, le cambiamos el nombre
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim()
    const searchText = searchValue.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim()

    return todoText.includes(searchText)
  })

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)

    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)

    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return <AppUI
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
  />
}

export default App;
