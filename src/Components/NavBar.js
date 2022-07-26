import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

	return (  
		<div id="logo" className="logo nav-common" >
			<nav id="nav">
			<ul className="nav-common">
			<li><NavLink
        to="#"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue",
        }}
      >
        Access- <span> Shop</span>
      </NavLink></li>
   <li><NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
				</NavLink></li>   
				
   <li> <NavLink
        to="/about"
        exact
        activeStyle={{
          background: "darkblue",
        }}
      >
        About
      </NavLink></li>  
    <li> <NavLink
        to="/products"
        exact
        activeStyle={{
          background: "darkblue",
        }}
      >
        Products
      </NavLink></li> 
	 <li><NavLink
        to="/contact"
        exact
        activeStyle={{
          background: "darkblue",
        }}
      >
        Contact
				</NavLink></li> 
				
			</ul>
			<div className="cart nav-icon nav-common"><img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412544/E-commerce%20landing%20page/icons/shopping_cart_1x.png" alt="shopping-cart"/></div>
			<div className="menu nav-icon nav-common"><img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412543/E-commerce%20landing%20page/icons/menu_1x.png" alt="hamburger-menu"/></div>
		</nav>
		</div>
		
	);
}
 
export default Navbar;