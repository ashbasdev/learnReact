function UserBadge({ user }) {
  return <span className="badge">{user ? user.name : "Guest"}</span>
}

function Header({user}) {
  // Header does not use `user`, but it still has to accept and forward it.
  // TODO 3: accept the `user` prop (function Header({ user })), then pass it to
  // <UserBadge user={user} /> below.
  return (
      <div>
        <span>Menu</span>
        <UserBadge user={user}/>
      </div>
  )
}

function Layout({user}) {
  // Layout does not use `user` either. It only passes it along.
  // TODO 2: accept the `user` prop (function Layout({ user })), then pass it to
  // <Header user={user} /> below.
  return (
      <div className="card stack">
        <h1>Dashboard</h1>
        <Header user={user}/>
      </div>
  )
}

function App() {
  const user = { name: "Sam Rivera", role: "Admin" }
  // TODO 1: start the chain by passing `user` down to <Layout user={user} />.
  return <Layout user={user}/>
}

export default App
