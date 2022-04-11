import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TickerData from "../tickerData";
import TickerSearch from "./TickerSearch";
function FindTicker({ searchQuerys, setSearchQuerys }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  //   const getApi = () => {
  //     fetch(`https://api.coinpaprika.com/v1/coins/${props.id}`, {
  //       method: "GET",
  //       mode: "cors",
  //       headers: {
  //         accept: "application/json",
  //       },
  //     })
  //       .then(res => res.json())
  //       .then(json => {
  //         console.log(json);
  //         setData([json]);
  //       });
  //   };
  //   useEffect(() => {
  //     getApi();
  //   }, []);
  const handleChange = event => {
    console.log(event.target);
    if (event.target.value === "value") {
      setName(event.target.value);
    }
  };
  return (
    <div>
      <form action="/" method="get">
        <div className="search">
          <input
            input="text"
            value={searchQuerys}
            onInput={e => setSearchQuerys(e.target.value)}
            id="value"
            onChange={handleChange}
            placeholder="search"
          ></input>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FindTicker;
