import React from "react";
import Orders from "./Orders";
import { useEffect, useState } from "react";
const OrdersList = ({ orderList, onDeleteOrder}) => {
  const [time, setTime] = useState(new Date());
  const timerId = useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
    // returning a cleanup function incase of unmount of clock component
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  const myOrders = orderList.map((order) => {
    return (
      <Orders
        order={order}
        key={order.id}
        identity={order.identity}
        category={order.category}
        location={order.location}
        review={order.review}
        code={order.code}
        product={order.product}
        phone={order.phone}
        onDeleteOrder={onDeleteOrder}
      />
    );
  });
  return (
    <div id= "orders" >
        <h1 id = "my-orders" > My orders </h1> <hr/>
        <div id="time" > {time.toString()} </div>
        <div className="item-container" > {myOrders} </div>
        <section >
            <footer>
                <h3 > Access - Shop </h3>
                <p> Designed by: Michael Kaburu | Contact: @infoaccessshop </p>
                <p> Copyright© 2022 </p>
            </footer>
        </section>
        </div >
    );
}

export default OrdersList;