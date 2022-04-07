import "./App.css";
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
/* This is the main component that renders the Header component. */
    <Router>
      <Header />
    </Router>
  );
}

export default App;
