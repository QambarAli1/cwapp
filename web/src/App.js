import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

// import { SearchAppBar } from "./components/surfaces/appBar"
import Home from './components/home';
import Contact from './components/contact';
import Laptops from './components/laptops';
import Mobiles from './components/mobiles';
import Accessories from './components/accessories';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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
              SamanChahiye.pk
            </li>
            <br />
            <li>
              <NavLink to="/" activeStyle={{ color: 'green' }}>Home</NavLink>
            </li>
            <li>

              <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                {/* <NavLink to="/products" activeStyle={{ color: 'green' }}>Products</NavLink> */}
                products
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >

                <NavLink to="/laptops" activeStyle={{ color: 'green' }}>
                  <MenuItem onClick={handleClose}>Laptops</MenuItem>
                </NavLink>
                <NavLink to="/mobiles" activeStyle={{ color: 'green' }}>
                  <MenuItem onClick={handleClose}>Mobiles</MenuItem>
                </NavLink>
                <NavLink to="/accessories" activeStyle={{ color: 'green' }}>
                  <MenuItem onClick={handleClose}>Accessories</MenuItem>
                </NavLink>
              </Menu>
            </li>

            <li>
              <NavLink to="/contact" activeStyle={{ color: 'green' }}>Contact</NavLink>
            </li>

          </ul>
        </nav>
        <Switch>

          {/* <Route path="/product">
            <Product />
          </Route> */}
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/laptops">
            <Laptops />
          </Route>
          <Route path="/mobiles">
            <Mobiles />
          </Route>
          <Route path="/accessories">
            <Accessories />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>

    </Router >
  );
}