import { createContext, useContext } from "react"

// createContext makes a shared value that any component below the provider can
// read directly with useContext, with no props threaded through the middle.
const UserContext = createContext(null) // 1. Create the context

function UserBadge() {
  // TODO 2: read the user from UserContext with useContext instead of this
  // placeholder, so the badge shows the real name.
  const user = useContext(UserContext) // 3. Consume it here
  return <span className="badge">{user ? user.name : "Guest"}</span>
}

function Header() {
  // No user prop here anymore. Context skips the middle.
  return (
      <div>
        <span>Menu</span>
        <UserBadge />
      </div>
  )
}

function Layout() {
  return (
      <div className="card stack">
        <h1>Dashboard</h1>
        <Header />
      </div>
  )
}

function App() {
  const user = { name: "Sam Rivera", role: "Admin" }
  // TODO 1: wrap <Layout /> in <UserContext.Provider value={user}> so every
  // component below can read the user. With no provider, useContext only sees
  // the default (null), so the badge stays "Guest".
  // 1. Provide a value
  return <UserContext.Provider value={user}>
    <Layout />
  </UserContext.Provider>
}

export default App
