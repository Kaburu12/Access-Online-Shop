import React from "react";

const Orders = ({
  order,
  identity,
  category,
  location,
  review,
  code,
  product,
  phone,
  onDeleteOrder
}) => {

  function handleDeleteClick() {
    fetch(`https://server-app123.herokuapp.com/order/${order.id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => onDeleteOrder(order));
  
  }

  return (
    <div className="items">
      <div><button onClick={handleDeleteClick}>X</button></div> 
      <label htmlFor="">Name : </label>
      <input type="text" value={identity} />
      <label htmlFor="">Phone Contact : </label>
      <input type="text" value={phone} />
      <label htmlFor="">Product Code :</label>
      <input type="text" value={code} />
      <label htmlFor="">Product Name :</label>
      <input type="text" value={product} />
      <label htmlFor="">Location :</label>
      <input type="text" value={location} />
      <label htmlFor="">Category :</label>
      <input type="text" value={category} />
      <label htmlFor="">Review :</label>
      <textarea name="" id="" cols="25" rows="8">
        {review}
      </textarea>
    </div>
  );
};

export default Orders;
