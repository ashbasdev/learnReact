import { useState } from "react"

// The state lives in the parent. The child reads it through a prop (the value),
// and changes it by calling a function the parent passes down. The child never
// touches the parent's state directly.
function LikeButton({ likes, onLike }) {
  return (
      <button className="btn" onClick={onLike}>
        ♥ {likes}
      </button>
  )
}

function App() {
  const [likes, setLikes] = useState(0)

  return (
      <div className="card stack">
        <h1>Quote of the day</h1>
        <p>"Simplicity is the soul of efficiency."</p>
        {/* `likes` is already passed down as a value the child can read.
          TODO: also pass an `onLike` function so the button can update the
          likes state that lives here in the parent. */}
        <LikeButton likes={likes} onLike={()=>setLikes(likes + 1)}/>
      </div>
  )
}

export default App
