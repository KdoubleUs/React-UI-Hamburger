import { useState } from "react";
import { Link } from "react-router-dom";
import Coin from "../data";
import Box from "./box";
function SearchBar({ searchQuery, setSearchQuery }) {
  const [name, setName] = useState("");
  const handleChange = event => {
    console.log(event.target);
    if (event.target.value === "val") {
      setName(event.target.value);
    }
  };

  return (
    <div>
      <form action="/" method="get">
        <div className="searchContainer">
          <h1 className="hbTitle">Search for a crypto</h1>
          <input
            type="text"
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)}
            id="val"
            onChange={handleChange}
            placeholder="Name of crypto coin"
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default SearchBar;
