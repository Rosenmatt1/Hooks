import React, { useState } from 'react';
import './App.css'

function Todo({ todo, index, completeTodo, deleteTodo }) {
  console.log(todo)
  console.log(index)
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
      className="todo">
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}> Complete </button>
        <button onClick={() => deleteTodo(index)}> Delete</button>
      </div>
    </div>
  )
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="addTodo"
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build cool todo app",
      isCompleted: false,
    }
  ])

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos);
    // console.log("todos in Completed", newTodos[index].isCompleted)
  }

  // const deleteTodo = index => {
  //   const todosWithRemoved = todos.filter(todo => {
  //     if (todo.isCompleted === false) {
  //       return todo
  //     }
  //     return !todos
  //   })
  //   setTodos(todosWithRemoved)
  // }

   // const deleteTodo = index => {
  //   const todosWithRemoved = todos.filter(todo => {
  //     if (todo.isCompleted === false) {
  //       return todo
  //     }
  //   })
  //   setTodos(todosWithRemoved)
  // }

  const deleteTodo = index => {
    // console.log("before", todos)
    const todosWithRemoved = [...todos]
    todosWithRemoved.splice(index, 1)
    // console.log("after", todosWithRemoved)
    setTodos(todosWithRemoved)
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
        <TodoForm
          addTodo={addTodo}
        />
      </div>
    </div>
  )
}

export default App;

