import { useRef } from "react"

function App() {
  // useRef gives us a stable box: { current }. React will set `current` to the
  // real DOM node once we attach this ref to an element.
  const inputRef = useRef(null)

  function focusInput() {
    // TODO 2: focus the input by calling .focus() on the ref's current node.
    inputRef.current.focus()
  }

  return (
      <div className="card stack">
        <h1>Quick note</h1>
        {/* TODO 1: attach inputRef to this input with the ref attribute. */}
        <input placeholder="Write something..." ref={inputRef} />
        <button className="btn" onClick={focusInput}>
          Focus the field
        </button>
      </div>
  )
}

export default App
