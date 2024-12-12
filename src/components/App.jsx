// src/components/App.jsx
import React from "react";
import Card from "./Card";
import coolcontacts from "../coolcontacts.js";
import "./App.css";

export default function App() {
  return (
    <div className="heading">
      <header className="heading">My Contacts</header>
      {coolcontacts.map((contact) => (
        <Card
          key={contact.id}
          name={contact.name}
          description={contact.description}
          image={contact.image}
          email={contact.email}
          phone={contact.phone}
        />
      ))}
    </div>
  );
}
