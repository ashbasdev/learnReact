import { useState, useEffect } from "react"

const USER_IDS = [1, 2, 3]

function App() {
  const [selectedUserId, setSelectedUserId] = useState(1)
  const [posts, setPosts] = useState([])

  // This effect fetches the posts for selectedUserId, but its dependency array
  // is empty, so it only runs once and never refetches when you pick another
  // user. Add selectedUserId to the dependency array.
  useEffect(() => {
    async function loadPosts() {
      const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${selectedUserId}`,
      )
      const data = await res.json()
      setPosts(data)
    }
    loadPosts()
  }, [selectedUserId]) // <- add selectedUserId to the dependency array

  return (
      <div className="card stack">
        <h1>Posts by user</h1>
        <div>
          {USER_IDS.map((id) => (
              <button
                  key={id}
                  className="btn"
                  onClick={() => setSelectedUserId(id)}
              >
                User {id}
              </button>
          ))}
        </div>
        <ul>
          {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
  )
}

export default App
