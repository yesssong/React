//import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import TestBox from "./pages/TestBox";
import TestStack from "./pages/TestStack";
import TestGrid from "./pages/TestGrid";
import TestGrid2 from "./pages/TestGrid2";
import TestButton from "./pages/TestButton";
import TestDrawer from "./pages/TestDrawer";
import TestDataGrid from "./pages/TestDataGrid";
import TestDataGrid2 from "./pages/TestDataGrid2";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Box Test</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/stack">Stack Test</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/grid">Grid Test </Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/grid2">Grid Test2</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/button">Button Test</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/mail">Drawer Test</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/data_grid">DataGrid Test</Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/data_grid2">DataGrid Test2</Link> &nbsp;&nbsp;&nbsp;&nbsp;
      </nav>

      <Routes>
        <Route path="/" element={<TestBox />} />
        <Route path="/stack" element={<TestStack />} />
        <Route path="/grid" element={<TestGrid />} />
        <Route path="/grid2" element={<TestGrid2 />} />
        <Route path="/button" element={<TestButton />} />
        <Route path="/mail" element={<TestDrawer />} />
        <Route path="/data_grid" element={<TestDataGrid />} />
        <Route path="/data_grid2" element={<TestDataGrid2 />} />
      </Routes>
    </div>
  );
}

export default App;
