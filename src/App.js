import React, { useState } from "react";
import "./styles.css";

const emojiDict = {
  "😀": "grinning face",
  "😁": "beaming face with smiling eyes",
  "🤣": "rolling on the floor laughing",
  "😍": "smiling face with heart-eyes",
  "😋": "face savoring food",
  "😜": "winking face with tongue",
  "🤔": "thinking face",
  "😑": "expressionless face",
  "😒": "unamused face",
  "😔": "pensive face"
};

const emojiDictKeys = Object.keys(emojiDict);

export default function App() {
  const [meaning, setMeaning] = useState(
    "meaning of emoji will be shown here..."
  );

  function outputText(emoji) {
    if (emoji.target.value in emojiDict) {
      setMeaning(emojiDict[emoji.target.value]);
    } else {
      setMeaning("couldn't found anything");
    }
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojiDict[emoji]);
  }

  return (
    <div className="App">
      <h1>Emogies</h1>
      <input name="name" onChange={outputText} />
      <h2>{meaning}</h2>
      <h3>Emojis we know</h3>
      {emojiDictKeys.map(function (emoji) {
        return (
          <span
            style={{ fontSize: "2rem", padding: "0.5rem", marginTop: "1rem" }}
            onClick={() => emojiClickHandler(emoji)}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
