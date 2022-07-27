import React from "react";
import { useState } from "react";

const OrderForm = () => {
 //usestate return order item values that hold the state values to be posted
	const [ identity, setIdentity ] = useState("");
	const [location, setLocation] = useState("");
	const [ category, setCategory ] = useState("");
	
	function handleSubmit(event) {
		//a constant that holds new order data to be posted
		const orderItem = {
			identity: identity,
			location: location,
			category: category,
		};

		//posting order data using our fetch API
		fetch("https://server-app123.herokuapp.com/order", {
			method: "POST",
			headers:
				{ "Content-Type": "application/json", },
			body: JSON.stringify(orderItem)
		})
			.then((r) => r.json())
			//new posted order
			.then((newOrder) => (newOrder));

	}
	return ( 
		<div>
		<div>Enter Your Correct Information To Order</div>
		<form className="orderform" onSubmit={handleSubmit}>
		<input
		  type="text"
		  placeholder="identity"
		  name="identity"
		  value={identity}
		 onChange={(e) => setIdentity(e.target.value)} />
			<input
		  type="text"
		  placeholder="location"
		  name="location"
		  value={location}
		  onChange={(e) => setLocation(e.target.value)}/>		
			<input
		  type="text"
		  placeholder="category"
		  name="category"
		  value={category}
		 onChange={(e) => setCategory(e.target.value)} />
		 <input type="submit" value="Click To Order" />	
	     </form>
	    </div>
	 );
}
 
export default OrderForm;