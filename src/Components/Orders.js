import React from "react";

const Orders = ({identity,category,location}) => {
	return (  
		<div className="orders">
			<h1 id="my-orders">My orders</h1>
			<div className="item-container">
				<div className="items">
				    <label htmlFor="">Name : </label>
					<input type="text" value={identity} /> 
					<label htmlFor="">Product Code :</label>
					<input type="text" value="ProductCode"/>
					<label htmlFor="">Product Name :</label>
					<input type="text" value="ProductName"/>
					<label htmlFor="">Location :</label>
					<input type="text" value={location} />
					<label htmlFor="">Category :</label>
					<input type="text" value={category} />
					<label htmlFor="">Review :</label>
					<input type="text" value="Review :"/>
			</div>
			</div>
			
		</div>
	);
}
 
export default Orders;