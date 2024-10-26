import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './page/About';
import Home from './page/Home';
import Navbar from './Componet/Navbar';


function App() {
  return (
      <div>
    <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
          <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
        </Switch>
    </Router>
      </div>
  );
}

export default App;
