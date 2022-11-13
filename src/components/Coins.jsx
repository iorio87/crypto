import React, { useEffect, useState } from "react";
import fetchInfo from "../services/fetch.js";

function Coins() {
  const [coins, setCoins] = useState("");
  const [favorites, setfavorites] = useState([]);

  const handlebutton = (coin) => {
    setfavorites((favorites) => [...favorites, coin]);
    alert(`${coin.name} added to favorites!`);
  };
  
  
  useEffect(() => {
    fetchInfo().then((data) => setCoins(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites]);

  return (
    <>
      <h1 className="text-center">TOP 10 CRYPTOS BY MARKET CAP </h1>
      {coins &&
        coins.map((coin, i) => (
          <div
            key={coin.id}
            className="border border-red-700 grid grid-cols-3 justify-items-center mx-20"
          >
            <div className="flex p-2">
              <img src={coin.image} className="sm:w-3 md:w-7 h-7 m-1" />
              <h2 className="p-2">
                {i + 1} - {coin.name}
              </h2>
            </div>
            <div className="flex justify-center">
              <h3 className="p-2">${coin.current_price}</h3>
            </div>

            <div className="justify-center">
              <button
                className="bg-red-500 hover:bg-red-700 text-white md:font-bold py-1 px-4 rounded-full m-2"
                onClick={() => handlebutton(coin)}
              >
                add to favorite
              </button>
            </div>
          </div>
        ))}
    </>
  );
}

export default Coins;
