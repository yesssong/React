//import logo from "./logo.svg";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import "./css/menu.css";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Mac from "./pages/Mac";
import IPad from "./pages/iPad";

function App() {
  // const title = "Global IT";
  // const title_style = { color: "#f00", fontSize: "30px" };

  return (
    <div className="App">
      {/* Menu */}
      <div id="header">
        <ul id="nav">
          {/* <li id="apple">&nbsp;</li> */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
          <li>
            <Link to="/mac">Mac</Link>
          </li>
          <li>
            <Link to="/ipad">IPad</Link>
          </li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>AirPods</li>
          <li>TV&amp;Home</li>
          <li>Only on Apple</li>
          <li>Accessories</li>
          <li>Support</li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/ipad" element={<IPad />} />
      </Routes>

      {/* 본문 - JSX에서 변수 사용 : {변수명} */}
      {/* <div id="content" style={{ color: "#f00", fontSize: "30px" }}>
        {title}
      </div>

      <div id="content" style={title_style}>
        {title}
      </div> */}
    </div>
  );
}

export default App;
