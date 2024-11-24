import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <span className="image">
        <img src={props.image} alt={props.name} />
      </span>
      <span className="content">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </span>
      <span className="contact">
        <p>{props.email}</p>
        <p>{props.phone}</p>
      </span>
    </div>
  );
}
