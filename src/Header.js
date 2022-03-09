import React from "react";

export default function Header() {
  return (
    <header className="header">
      <img
        src="https://raw.githubusercontent.com/Pancartex/meme-generator/062a595227cad524104beccffc8b6401c7606737/src/images/troll-face.png"
        className="header--image"
      />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React project built with 🖤</h4>
    </header>
  );
}
