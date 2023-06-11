import React from "react";

function Emotes(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning.substring( 0, 200)}{props.meaning.length < 200 ?  '':'.....'}</dd>
    </div>
  );
}

export default Emotes;
