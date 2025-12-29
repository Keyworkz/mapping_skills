import React from "react";
import Card from "../components/Card";
import emojipedia from "../emojipedia";

// console.log(emojipedia[0].meaning);

function createEntry(emojiObj) {
  return (
    <Card
      key={emojiObj.id}
      emoji={emojiObj.emoji}
      name={emojiObj.name}
      meaning={emojiObj.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
