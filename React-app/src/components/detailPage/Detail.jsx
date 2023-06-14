import  React , {useContext}  from "react";
import { useParams } from "react-router-dom";
import {EmojiArray} from "../App"
import MainDetail from "./MainDetail";

// display data to detail page
const mainEmoji = (x)=>{
    return(
        <MainDetail name={x.name} emoji={x.emoji} meaning={x.meaning} catagory={x.category}/>
    )
}

const Detail = () =>{
    const emojis = useContext(EmojiArray);   //emoji Array
    const {name} = useParams();   //getting content after : (eg : detail/:name)  
    const newName = name.replaceAll('-',' ').replaceAll('_', '-').toLowerCase();
    // finging name's data in emojis Array and store it to result array (result array has only one data)
    const result = emojis.filter((x)=>{
            return(newName === x.name.toLowerCase().replace(/\u00A0/g, ''))
    })

    return (<>
    {/* to show the detail and (result array has only one data)  */}
    <div>{result.map(mainEmoji)}</div></>)
}

export default Detail;