import './App.css';

import {
  BrowserRouter as Router,
} from "react-router-dom";

import Switch from "./router/AppSwitch"
import Navigation from "./partials/Navigation";
import HistoryNav from "./partials/HistoryNav";

function App() {
  return (
    <div className="App">
     
      <Router>
        <Navigation/>
        <HistoryNav/>
        <Switch/>
      </Router>
    </div>
  );
}

export default App;
