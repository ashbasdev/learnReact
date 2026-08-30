import { useState, useEffect } from "react"

function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // The fetch and the loading/error flags are already wired up for you.
  useEffect(() => {
    async function loadUsers() {
      try {
        // Small artificial delay so the "Loading..." state is visible on every run.
        await new Promise((resolve) => setTimeout(resolve, 800))
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        if (!res.ok) throw new Error("Request failed")
        const data = await res.json()
        setUsers(data)
      } catch (err) {
        setError("Could not load users.")
      } finally {
        setLoading(false)
      }
    }
    loadUsers()
  }, [])

  return (
      <div className="card stack">
        <h1>Users</h1>
        {/* 1. While loading is true, show <p className="muted">Loading...</p> */}
        {loading && <p className="muted">Loading...</p>}
        {/* 2. If error is set, show <p className="error">{error}</p> */}
        {error && <p className="error">{error}</p>}
        {/* 3. If not loading and no error and users is empty, show
             <p className="muted">No users found.</p> */}
        {!loading && !error && users.length === 0 && <p className="muted">No users found.</p> }
        <ul>
          {users.map((user) => (
              <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
  )
}

export default App
