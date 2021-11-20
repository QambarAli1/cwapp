import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import Navdashboard from './components/navdashboard'
import CreatePost from './components/createpost'
import Posts from './components/posts'

export default function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li className='logocompany' >
              SamanChaiye.pk
            </li>
            <br />
            <li>
              <NavLink to="/" activeStyle={{ color: 'green' }}>Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup" activeStyle={{ color: 'green' }}>Sign Up</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" activeStyle={{ color: 'green' }}>Dashboard</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/dashboard">
            <Navdashboard />
            {/* <Dashboard /> */}
            <CreatePost />
            <Posts />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}