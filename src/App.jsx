import { useState, useEffect } from "react"

function App() {
  const [users, setUsers] = useState([])

  // Fetch the users once, when the component mounts:
  // 1. Add a useEffect with an empty dependency array [].
  // 2. Inside, define an async function that fetches
  //    https://jsonplaceholder.typicode.com/users, parses the JSON, and stores
  //    it with setUsers.
  // 3. Call that function.
  useEffect(()=> {
    async function loadUsers() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json()
      setUsers(data)
    }
    loadUsers();
  }, [])

  return (
      <div className="card stack">
        <h1>Users</h1>
        <ul>
          {users.map((user) => (
              <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
  )
}

export default App
