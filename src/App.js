import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🥰": "Smiling face while in Love",
  "😴": "Sleepy",
  "😠": "Angry",
  "👻": "Ghost",
  "😐": "Neutral face ",
  "🍕": "Pizza",
  "🍟": "French Fries",
  "🍺": "Beer"
};

var emojisWeKnow = Object.keys(emojiDictionary);


export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our Database";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>INSIDE OUTttt</h1>

      <input
        placeholder="Search your emoji or Click below to know the meaning"
        style={({ padding: "2em" }, { width: "45%" })}
        onChange={emojiInputHandler}
      ></input>
      <h2> Meaning : {meaning}</h2>

      <h3>Emojis We Know </h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
