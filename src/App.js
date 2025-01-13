import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
// import React from 'react';
import './App.css';

const defaultTodos = [
  { text: "Ir al super", completed: true },
  { text: "Comprar leches", completed: false },
  { text: "Ver Barbie un toque de magia", completed: false },
  { text: "Tomar helado", completed: false },
  { text: "Recibirme de desarrolladora FrontEnd", completed: false },
  { text: "Ser feliz siempre", completed: false }
]

function App() {
  return (
    <>

      <TodoCounter completed={8} total={10} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />

    </>
  );
}

export default App;
