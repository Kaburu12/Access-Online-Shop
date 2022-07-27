import React from "react";
import { useState } from "react";

const OrderForm = () => {
 //usestate return order item values that hold the state values to be posted
	const [ identity, setIdentity ] = useState("");
	const [location, setLocation] = useState("");
    const [ category, setCategory] = useState("");


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


	return ( 
		<div>form</div>
	 );
}
 
export default OrderForm;