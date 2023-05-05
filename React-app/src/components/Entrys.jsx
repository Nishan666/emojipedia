import React from "react";
import Emotes from "./Emotes";
import emojipedia from "../emojipedia";

function createEmotes(emojis) {
  return (
    <Emotes
      key={emojis.id}
      emoji={emojis.emoji}
      name={emojis.name}
      meaning={emojis.meaning}
    />
  );
}

function Entrys() {
  return <dl className="dictionary">{emojipedia.map(createEmotes)}</dl>;
}

export default Entrys;
