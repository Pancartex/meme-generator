import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="meme-img-container">
        <img src="src/images/troll-face.png" className="header--image" />
      </div>
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}
