import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Error from './components/pages/Error';
import Post from './components/pages/Post';
import Dashboard from './components/pages/Dashboard';
import Navbar from './components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        
      

      </BrowserRouter>
    </>
  );
}

export default App;
