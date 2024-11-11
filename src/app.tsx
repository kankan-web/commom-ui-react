import React from "react";
import img from "../public/img.png";
import { Header } from "@components/Header/index";
import { Button } from "@components/Button/Button";
function App() {
  return (
    <>
      <Header />
      <Button label="Button" onClick={() => {}} primary />
      <div className="App">React18 + Ts5 + webpack5 开发模板搭建</div>
      <img src={img} alt="测试" />
    </>
  );
}

export default App;
