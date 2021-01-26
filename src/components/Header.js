import React from "react";
import image from "../deliveroo.png";

function Header({ data }) {
  return (
    <div>
      <div className="topbar ">
        <img className="logo" src={image} alt="deliveroo" />
      </div>

      <div className="header">
        <div className="container">
          <div className="col-1">
            <h1 className="title">{data.restaurant.name}</h1>
            <p className="para-header">{data.restaurant.description}</p>
            {/* {console.log(data.restaurant.picture)}; */}
          </div>
          <div className="col-2">
            <img src={data.restaurant.picture} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
