import React from 'react';
import {BrowserRouter as Router,Link, Switch, Route, NavLink} from  'react-router-dom';
import './navbar.css';
import Home from '../Home';
import About from '../About';
import Login from '../Login';
import {motion} from 'framer-motion';
const Navbar = () => {
    return ( 
        <Router id="rt">
            <nav>
                <div>
                        <NavLink id="lnk" exact to="/" activeStyle={{fontWeight: "bold", color: "white"}}>Home</NavLink>   
                        <NavLink id="lnk" exact to="/about" activeStyle={{fontWeight: "bold", color: "white"}}>About</NavLink>
                    
                </div>
                
                <div>
                    <NavLink id="loginButton" exact to="/login">
                        <motion.button id="loginButtonText" whileHover={{ scale: 1.1 }} whileTap={{scale:0.9}}>Login</motion.button>
                    </NavLink>
                </div>
                
            </nav>
            <Switch>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
        
     );
}
 
export default Navbar;