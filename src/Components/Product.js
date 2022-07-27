import React from "react";
import { Link } from "react-router-dom";

const Product = ({name,image,price,category,code,description}) => {
	return ( 	
		<div className="each-product">
				     <div>
					 <img id="img-product" src={image} alt="img" />
				    <p><span>{name}</span> </p>
				    <p>{description} </p>
					<p><span>{category}</span></p>
				    <p>{price}</p>
				    <p>Code : { code}</p>
					<Link to="/orderform"> 
					<button className="button">Order Now</button>
					</Link>
					</div>
		</div>
	 );
}
 
export default Product;