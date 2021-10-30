import React, { useState } from "react";
import Cards from "react-credit-cards";   // Installed react-credit-card package 
import "react-credit-cards/es/styles-compiled.css"; // from react-credit-card for card style
import "../Credit Card/CardStyle.css";  // external style

function CreditCard() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <div>
        <Cards
        number={number}
        name={name}
        expiry ={expiry}
        cvc= {cvc}
        focused = {focus}
        />
        <form>
          <input
            type="tel"
            name="number"
            placeholder="Card Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            onFocus = {(e)=> setFocus(e.target.name)}
          />
          <input
            style ={{padding: ".375rem .75rem", border: "1px solid red", width: "20%"}}
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus = {(e)=> setFocus(e.target.name)}
          />
          <input
           style ={{padding: ".375rem .75rem", border: "1px solid red", width: "20%"}}
            type="text"
            name="expiry"
            placeholder="mm/yy Expiry"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            onFocus = {(e)=> setFocus(e.target.name)}
          />
          <input
            type="tel"
            name="cvc"
            placeholder="CVC"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            onFocus = {(e)=> setFocus(e.target.name)}
          />
        </form>
    </div>
  );
}

export default CreditCard;
