import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage.jsx";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(1000);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>hello!</h1>
      <ColorfulMessage color="blue">元気ですか＝＝</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>ボタン</button>
      <p>{num}</p>
      <button>On/OFF</button>
    </>
  );
};

export default App;
