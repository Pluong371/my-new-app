import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/home";
import Test from "./page/test/test";


function App() {
  return (
    <div className="App">
      <Router>
        <div className="app">
         
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;