import React from "react";
import { Link } from "react-router-dom";

const Product = ({name,image,price,category,description}) => {
	return ( 
	<div id="productsList"> 	
	 <div className="container-products">
		<div className="each-product">
		 {/* <figure >
			        <img id="img-product" src={image} alt="img" />
			        <figcaption>name:{ name}</figcaption>
							<figcaption>price: { price}</figcaption>
					<figcaption>description:{description} </figcaption>
							<figcaption>category: { category}</figcaption>
					<Link to="/orderform"> 
							<button className="button">Order Now</button>
					</Link>
		</figure> */}
	  </div>
	</div>
	</div>
		
	 );
}
 
export default Product;