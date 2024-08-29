import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./page/home";
import Test from "./page/test/test";
import New_Feed from './components/Post_Form/New_Feed';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="app">
         
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/new_feed" element={<New_Feed />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;