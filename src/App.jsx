import { useState } from "react"

// Keep the whole form in one object and update any field with a single
// handler, using the input's name attribute and a computed property key.

function App() {
  const [form, setForm] = useState({ name: "", email: "" })

  // 1. Write a handleChange that reads name and value off e.target and
  //    updates the matching field with setForm({ ...form, [name]: value }).

  return (
    <div className="card stack">
      <h1>Sign up</h1>
      <label>Name</label>
      {/* 2. Add name="name", value from form.name, and onChange={handleChange}. */}
      <input placeholder="Your name" />
      <label>Email</label>
      {/* 2. Add name="email", value from form.email, and onChange={handleChange}. */}
      <input placeholder="you@example.com" />
      <p className="muted">
        {form.name || "name"} ({form.email || "email"})
      </p>
    </div>
  )
}

export default App
