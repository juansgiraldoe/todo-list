import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
//import './App.css';

const todos = [
  {text: 'Ir a multiplaza', completed: false},
  {text: 'Avanzar en Product Design', completed: true},
  {text: 'Verificar trello', completed: false},
]

function App() {
  return (
    <>
      <TodoCounter/>
      
      <TodoSearch/>
      <TodoList>
        {todos.map( todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
        </TodoList>
      <CreateTodoButton/>
    </>
  );
}

export default App;
