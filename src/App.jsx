import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Header.jsx"
import Home from "./Home.jsx"
import Detail from "./Detail.jsx"

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
