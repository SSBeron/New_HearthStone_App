import "./App.css";
import { Routes, Route } from "react-router-dom";
import HearthStone from "./components/HearthStone.jsx";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Routes>
        <Route index element={<HearthStone />} />
      </Routes>
    </div>
  );
}

export default App;
