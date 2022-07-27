import React from "react";
import { useState } from "react";

const OrderForm = () => {
 //usestate return order item values that hold the state values to be posted
	const [ identity, setIdentity ] = useState("");
	const [location, setLocation] = useState("");
 const [ category, setCategory] = useState("");


	return ( 
		<div>form</div>
	 );
}
 
export default OrderForm;