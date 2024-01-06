import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

//Components
import Header from "./components/Header";

//Styles
import 'react-toastify/dist/ReactToastify.css'

function App() {
	return (
		<>
			<Router>
				<div className="container">
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
					</Routes>
				</div>
			</Router>
			<ToastContainer />
		</>
	);
}

export default App;
