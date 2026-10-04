import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home.jsx"
import Welcome from "./Welcome.jsx"

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome/:name" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
