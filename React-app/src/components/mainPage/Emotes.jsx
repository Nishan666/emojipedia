import React from "react";
import { useNavigate } from "react-router-dom";



function Emotes(props) {
  const navigate = useNavigate();

  const goToLink = ()=>{
    const cleanedName = props.name.replace(/\u00A0/g, '').replaceAll('-', '_').replaceAll(' ', '-'); // Remove all non-breaking space characters
    const url = `/detail/${cleanedName}`;
    navigate(url);
}


  return (
    <div className="term" >
      <dt style={{cursor:"pointer"}} onClick={goToLink}>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span >{props.name}</span>
      </dt>
      <dd>{props.meaning.substring( 0, 200)}{props.meaning.length < 200 ?  '':'.....'}</dd>
    </div>
  );
}

export default Emotes;
