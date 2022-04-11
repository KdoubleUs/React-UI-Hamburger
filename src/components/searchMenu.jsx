import { Link, Routes, Route } from "react-router-dom";
import SearchBar from "./search";
import { Fragment, useState } from "react";
import Home from "./home";
import Coin from "../data";
function GoThrough() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const filterPosts = (Coin, query) => {
    if (!query) {
      return Coin;
    }

    return Coin.filter(post => {
      const postName = post.name.toLowerCase();
      return postName.includes(query);
    });
  };
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredPosts = filterPosts(Coin, searchQuery);
  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ul className="searchStorage">
        {filteredPosts.map(post => (
          <div className="searchBox">
            <li key={post.key}>
              <span>
                <h1>Coin:{post.name}</h1>
              </span>
              <span>Symbol:{post.symbol}</span>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default GoThrough;
