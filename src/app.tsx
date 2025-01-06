import React from "react";
// import img from "../public/img.png";
// import { Header } from "@components/Header/index";
// import { Button } from "@components/Button/Button";
import Calendar from "@components/Calendar/index";
import dayjs from "dayjs";

function App() {
  return (
    <div className="App">
      <Calendar defaultValue={dayjs("2023-11-08")}></Calendar>
    </div>
  );
}
export default App;
