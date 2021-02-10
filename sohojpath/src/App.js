import logo from './logo.svg';
import './App.css';
import ChatWindow from './Components/ChatWindow'
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home'
function App() {
  return (

    <Router>
      <div>
        <Navbar/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        
      </div>
    </Router>
    
  );
}

export default App;
