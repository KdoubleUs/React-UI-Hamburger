import logo from "../images/bitcoin.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <Link to="/">
        <h1 className="head">Find A Crypto Coin</h1>
      </Link>
      <div className="imgContainer">
        <img src={logo} alt="none" className="homeImg"></img>
      </div>
      <h1 className="head">Welcome To My Crypto UI</h1>
    </div>
  );
}
export default Home;
