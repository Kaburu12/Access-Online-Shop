import React from "react";
import Orders from "./Orders";

const OrdersList = ({ orderList }) => {

	const myOrders = orderList.map((order) => {
		return <Orders
			key={order.id}
			identity={order.identity}
			category={order.category}
			location={order.location}
			review={order.review}
			code={order.code}
			product={order.product}
			phone={order.phone}
		/>
})

	return ( 
		<div>
         {myOrders}
		</div>
	 );
}
 
export default OrdersList;