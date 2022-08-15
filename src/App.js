// import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Greeter from "./Components/Greeter/Greeter";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route exact path="/home" element={<Home />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/greeter" element={<Greeter />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
