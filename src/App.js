
import './App.css';
import Header from './components/header/header';
import { Stack } from "@mui/material";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./page/home";
function App() {
  return (
    <div className="App">
      
        <Home/>
    
    </div>
  );
}

export default App;
