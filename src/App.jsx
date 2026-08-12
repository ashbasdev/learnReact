import { useState } from "react"

// Handle submission on the form with onSubmit. Call e.preventDefault to stop
// the page reload, use the values from state, then reset the form.

function App() {
  const [text, setText] = useState("")
  const [todos, setTodos] = useState(["Buy milk"])

  // 2 + 3. Write handleSubmit: call e.preventDefault(), add text to todos
  //        (a new array), then reset text to "".

  function handleSubmit(e) {
    e.preventDefault(); // stop the page reload
    setTodos([...todos, text]) // add the new todo to the list 
    setText("")
  }


  return (
    <div className="card stack">
      <h1>To-do</h1>
      {/* 1. Add onSubmit={handleSubmit} to this form. */}
      <form className="stack" onSubmit={handleSubmit}>
        <input
          placeholder="Add a task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn" type="submit">
          <span className="btn-icon">+</span>Add
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
