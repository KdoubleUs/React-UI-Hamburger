import { useState } from "react";
function Box(props) {
  // const Coin = props => {
  //   let { coin } = props;
  //   let { name } = coin;
  // };

  return (
    <div className="boxContainer">
      <h1>{props.name}</h1>
    </div>
  );
}

export default Box;
