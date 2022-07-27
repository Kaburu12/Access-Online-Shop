import React from "react";
import Orders from "./Orders";

const OrdersList = ({ orderList }) => {

	const myOrders = orderList.map((order) => {
		return <Orders
			key={order.id}
			identity={order.identity}
			category={order.category}
			location={order.location}
		/>
})

	return ( 
		<div>
         {myOrders}
		</div>
	 );
}
 
export default OrdersList;