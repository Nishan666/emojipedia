import React from "react";
import { useNavigate } from "react-router-dom";

const MainDetail = (props)=>{

    const navigate = useNavigate();

    return(<>
    <button className="backBTN" onClick={()=>navigate("/")}>&#8606; Go Back</button>

    <div className="mainEmoji">
    <div className="catEmoji"><span className="catSpan">Catagoty : </span>{props.catagory}</div>
    <div className="tileEmoji">{props.name}</div>
    <div className="picEmoji"><span className="picSpan">{props.emoji}</span></div>
    <div className="meaningEmoji">{props.meaning}</div>
    
    </div>
    </>)
}

export default MainDetail;