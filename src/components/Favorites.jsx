import React from "react";
import Coins from "./Coins";

function Favorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  console.log(favorites);
  return (
    // <div>{favorites && favorites.map((coin) => <li>{coin.name}</li>)}</div>

    <div className="flex flex-col justify-center h-full">
      <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
        <header className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800">Favorites</h2>
        </header>
        <div className="p-3">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Coin</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Price</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Change 24hs</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">market cap</div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {favorites &&
                  favorites.map((coin) => (
                    <tr key={coin.id}>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img
                              className="rounded-full"
                              src={coin.image}
                              width="40"
                              height="40"
                              alt="Alex Shatov"
                            />
                          </div>
                          <div className="font-medium text-gray-800">
                            {coin.name}
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          $ {coin.current_price}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap text-gray-800">
                        <div className="text-left">
                          {coin.price_change_percentage_24h} %
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center text-gray-800">
                          {parseInt(coin.market_cap)}
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favorites;
