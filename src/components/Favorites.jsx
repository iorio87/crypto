import React from "react";
import Coins from "./Coins";

function Favorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  return (
    <div>{favorites && favorites.map((coin) => <li>{coin.name}</li>)}</div>
  );
}

export default Favorites;
