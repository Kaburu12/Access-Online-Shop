import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

	return (  
		<div className="navbar">
 <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        activeStyle={{
          background: "darkblue",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/products"
        exact
        activeStyle={{
          background: "darkblue",
        }}
      >
        Products
      </NavLink>
	  <NavLink
        to="/contact"
        exact
        activeStyle={{
          background: "darkblue",
        }}
      >
        Contact
      </NavLink>
	  <NavLink
        to="#"
        exact
        activeStyle={{
          background: "darkblue",
        }}
      >
        Log In
      </NavLink>
		</div>
	);
}
 
export default Navbar;