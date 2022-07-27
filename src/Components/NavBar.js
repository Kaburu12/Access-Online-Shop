import React from "react";
import { NavLink ,Link} from "react-router-dom";

const Navbar = () => {

	return (  
		<div id="logo" className="logo nav-common" >
			<nav id="nav">
			<ul className="nav-common">
		<li><Link to="/"><p>Access - <span> Shop</span></p> </Link></li>
   <li><NavLink to="/">Home</NavLink></li>   
   <li> <NavLink to="/about">About</NavLink></li>  
    <li><NavLink to="/products">Products</NavLink></li> 
    <li><NavLink to="/orders">My Orders</NavLink></li> 
		 </ul>
			<div className="cart nav-icon nav-common"><img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412544/E-commerce%20landing%20page/icons/shopping_cart_1x.png" alt="shopping-cart"/></div>
			<div className="menu nav-icon nav-common"><img src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412543/E-commerce%20landing%20page/icons/menu_1x.png" alt="hamburger-menu"/></div>
		</nav>
		</div>
		
	);
}
 
export default Navbar;