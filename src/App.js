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
  "🍺": "Beer",
  "😗": "Kissing Face",
  "🤖": "Robo Rajini",
  "👿": "Angry Face",
  "✌️": "Victory"
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
      <h1>EMOJIPEDIA📚</h1>

      <input
        placeholder="Search your emoji or Click below to know the meaning"
        onChange={emojiInputHandler}
      ></input>
      <h2> Meaning : {meaning}</h2>

      <h3>Emojis We Know </h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "3rem",
              backgroundColor: "#00ffgg",
              padding: "2rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
