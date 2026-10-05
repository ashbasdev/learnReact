import Header from "./Header.jsx"
import Home from "./Home.jsx"
// TODO: import Detail from its file, and import what you need from
// "react-router-dom" (see the challenge).
import Detail from "./Detail.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // The app has two pages, Home and Detail, each in its own file. Right now App
  // just renders the header and Home, so the Detail page never shows. Turn this
  // into a routed app: the challenge below has the steps.
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
