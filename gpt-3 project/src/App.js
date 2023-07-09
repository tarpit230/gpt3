import React from "react";
import "./App.css";
import "./index.css";

import {
  Blog,
  Footer,
  Features,
  Header,
  Possibility,
  Whatgpt3
} from "./container";
import { Cta, Brand, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
