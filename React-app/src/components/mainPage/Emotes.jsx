import React from "react";
import { useNavigate } from "react-router-dom";


// here Emotes is to display a single card 
// props -> key , emoji , name , meaning 
function Emotes(props) {
  const navigate = useNavigate();

  // goToLink function will activate when anyone clicked on card name or pic 
  // and here it will redirect then to diff route , based on the name of clicked emoji 
  const goToLink = () => {
    const cleanedName = props.name.replace(/\u00A0/g, '').replaceAll('-', '_').replaceAll(' ', '-'); // Remove all non-breaking space characters
    const url = `/detail/${cleanedName}`;
    navigate(url);
  }


  return (
    <div className="term" >
      <dt style={{ cursor: "pointer" }} onClick={goToLink}>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span >{props.name}</span>
      </dt>
      {/* only show 100 words */}
      <dd>{props.meaning.substring(0, 100)}{props.meaning.length < 100 ? '' : '.....'}</dd>
    </div>
  );
}

export default Emotes;
