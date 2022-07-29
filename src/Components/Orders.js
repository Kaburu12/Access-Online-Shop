import React from "react";

const Orders = ({
  identity,
  category,
  location,
  review,
  code,
  product,
  phone,
}) => {
  return (
    <div className="items">
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
