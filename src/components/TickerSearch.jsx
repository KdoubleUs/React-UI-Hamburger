import { useState } from "react";
import TickerData from "../tickerData";
import FindTicker from "./ticker";

function TickerSearch() {
  const { search } = window.location;
  const querys = new URLSearchParams(search).get("s");
  const filterPosts = (TickerData, querys) => {
    if (!querys) {
      return TickerData;
    }
    return TickerData.filter(post => {
      const tickerName = post.name.toLowerCase();
      return tickerName.includes(querys);
    });
  };
  const [searchQuerys, setSearchQuerys] = useState(querys || "");
  const filterQuery = filterPosts(TickerData, searchQuerys);
  return (
    <div>
      <div className="tickerTitle">
        <h1 className="hbTitle" id="tickerTitle">
          Find A Crypto Ticker
        </h1>
        <h3 className="hbTitle">
          A stock ticker reports transaction and price data for a security,
          updated continuously throughout the day.
        </h3>
      </div>
      <FindTicker
        searchQuerys={searchQuerys}
        setSearchQuerys={setSearchQuerys}
      />
      <ul className="tickerStorage">
        {filterQuery.map(ticker => (
          <div className="tickerBox">
            <li key={ticker.key}>
              <span> Coin:{ticker.name}</span>
              <span> Price(USD):${ticker["price_usd"]}</span>
              <span> BitCoin Price:{ticker["price_btc"]}</span>
              <span> Volume 24 Hours:{ticker["volume_24h_usd"]}</span>
              <span> Market Cap USD:${ticker["market_cap_usd"]}</span>
              <span> Total Supply:{ticker["total_supply"]}</span>
              <span> Max Supply: {ticker["max_supply"]}</span>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default TickerSearch;
