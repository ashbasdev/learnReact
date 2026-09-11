import { useFetch } from "./useFetch.js"

function Users() {
  const {
    data: users = [],
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users")

  if (loading) return <p className="muted">Loading...</p>
  if (error) return <p className="error">{error}</p>
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

function App() {
  return (
    <div className="card stack">
      <h1>Users</h1>
      <Users />
    </div>
  )
}

export default App
