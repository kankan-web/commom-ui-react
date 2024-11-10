import React from "react";
import img from "../public/img.png";
import Header from "@components/Header/index";
function App() {
  return (
    <>
      <Header />
      <div className="App">React18 + Ts5 + webpack5 开发模板搭建</div>
      <img src={img} alt="测试" />
    </>
  );
}

export default App;
