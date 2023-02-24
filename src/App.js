import "./App.css";
import { Routes, Route } from "react-router-dom";
import HearthStone from "./components/Hearthstone.jsx";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/hearthstone" element={<HearthStone />} />
      </Routes>
    </div>
  );
}

export default App;
