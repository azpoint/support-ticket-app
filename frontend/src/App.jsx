//Dependencies
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

//Componets
import Header from "./components/Header"

//Pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {

  return (
    <>
    <Router>
      <div className="container mx-auto">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
