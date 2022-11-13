const fetchInfo = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkdivne=false&price_change_percentage=24h`
    ).then((data) => data.json());
  
    return response;
  };

export default fetchInfo;