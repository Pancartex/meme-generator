import React from "react";
import Header from "./Header";
import Meme from "./Meme";
import "./index.css";

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <Meme />
    </div>
  );
}
