import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="image">
        <img src={props.image} width={100} alt={props.name} />
      </div>
    <div className="content">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
      <div className="contact">
        <p>{props.email}</p>
        <p>{props.phone}</p>
      </div>
    </div>
  );
}
