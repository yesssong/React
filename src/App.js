//import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import TestBox from "./pages/TestBox";
import TestStack from "./pages/TestStack";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Box Test</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/stack">Stack Test</Link> &nbsp;&nbsp;&nbsp;&nbsp;
      </nav>

      <Routes>
        <Route path="/" element={<TestBox />} />
        <Route path="/stack" element={<TestStack />} />
      </Routes>
    </div>
  );
}

export default App;
