import { Marker, Popup } from "react-leaflet";
import "./pin.scss";

import React from "react";
import { Link } from "react-router-dom";

const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <div className="imgcontainer">
            <img src={item.img} alt="" />
          </div>

          <div className="textContainer">
            <Link className="title" to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} Bedroom</span>
            <b>${item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
