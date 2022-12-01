import React from "react";

function HouseItem({ house }) {
  return (
    <div className="house">
      <div>{new Date(house.createdAt).toLocaleString("en-US")}</div>
      <h2>{house.text}</h2>
    </div>
  );
}

export default HouseItem;
