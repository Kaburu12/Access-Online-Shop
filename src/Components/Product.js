import React from "react";
import { Link } from "react-router-dom";

const Product = ({name,image,price,category,description}) => {
	return ( 	
	 <div className="container-products">
		<div className="each-product">
					<img id="img-product" src={image} alt="img" />
			        <p>name:{ name}</p>
					<p>price: { price}</p>
					<p>description:{description} </p>
					<p>category: { category}</p>
					<Link to="/orderform"> 
					<button className="button">Order Now</button>
					</Link>
	     </div>
	</div>
		
	 );
}
 
export default Product;