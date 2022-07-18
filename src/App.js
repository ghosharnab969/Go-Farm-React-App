import React from "react";
import { Header } from "./components";
import { FirstScreen } from "./components";
import { SecondScreen } from "./components";
import { ThirdScreen } from "./components";
import { FourthScreen } from "./components";
import { FifthScreen } from "./components";
import { SixthScreen } from "./components";

const App = () => {
  return (
    <div className="w-screen h-auto flex flex-col">
      <Header />
      <FirstScreen />
      <SecondScreen />
      <ThirdScreen />
      <FourthScreen />
      <FifthScreen />
      <SixthScreen />
    </div>
  );
};

export default App;
