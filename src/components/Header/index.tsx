import React from "react";
import style from "./style/index.module.less";
const add = (a: number, b: number) => {
  console.log("res", a + b);
  return a + b;
};

const Header = () => {
  add(100, 200);
  return <div className={style.container}>Header</div>;
};
export default Header;
