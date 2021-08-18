import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage.jsx";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        console.log("in if " + num);
        console.log(faceShowFlag);
        faceShowFlag || setFaceShowFlag(true);
      } else {
        console.log("in else " + num);
        console.log(faceShowFlag);
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num, faceShowFlag]);

  const onClickFace = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>hello!</h1>
      <ColorfulMessage color="blue">元気ですか＝＝</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>ボタン</button>
      <p>{num}</p>
      <button onClick={onClickFace}>On/OFF</button>
      {faceShowFlag && <p>(oo)/</p>}
    </>
  );
};

export default App;
