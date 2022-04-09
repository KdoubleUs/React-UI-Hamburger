import "./App.css";
import NavBar from "./components/nav";
import SearchBar from "./components/search";
import FetchApi from "./components/ticker";
import { Link, Routes, Route } from "react-router-dom";
import { Fragment, useState } from "react";
import btc from "./images/btcimg.png";
import Home from "./components/home";
import Coin from "./data";
import GoThrough from "./components/searchMenu";
import About from "./components/about";
import Bio from "./components/BitCoin";
import SearchFor from "./components/ticker";
import TickerSearch from "./components/TickerSearch";
function App() {
  // const { search } = window.location;
  // const query = new URLSearchParams(search).get("s");
  // const filterPosts = (Coin, query) => {
  //   if (!query) {
  //     return Coin;
  //   }

  //   return Coin.filter(post => {
  //     const postName = post.name.toLowerCase();
  //     return postName.includes(query);
  //   });
  // };
  // const [searchQuery, setSearchQuery] = useState(query || "");
  // const filteredPosts = filterPosts(Coin, searchQuery);

  return (
    <div className="app">
      <div>
        <NavBar />
      </div>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/search" element={<GoThrough />}></Route>

          <Route exact path="/coins" element={<Bio />} />
          <Route exact path="/ticker" element={<TickerSearch />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </main>
      <div></div>
    </div>
  );
}

export default App;

{
  /* <Route
  exact
  path="/search"
  render={() => (
    <div>
      <ul>
        {filteredPosts.map(post => (
          <li key={post.key}>{post.name}</li>
        ))}
      </ul>
    </div>
  )}
/> */
}
