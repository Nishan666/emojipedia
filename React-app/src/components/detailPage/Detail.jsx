import  React , {useContext}  from "react";
import { useParams } from "react-router-dom";
import {EmojipediaSearch} from "../App"
import MainDetail from "./MainDetail";


const mainEmoji = (x)=>{
    return(
        <MainDetail name={x.name} emoji={x.emoji} meaning={x.meaning} catagory={x.category}/>
    )
}

const Detail = () =>{

    const serach = useContext(EmojipediaSearch);

    const {name} = useParams();

    const newName = name.replaceAll('-',' ').replaceAll('_', '-').toLowerCase();


    const result = serach.filter((x)=>{
            return(newName === x.name.toLowerCase().replace(/\u00A0/g, ''))
    })
    console.log(result);

    return (<>
    <h1>{result.map(mainEmoji)}</h1></>)
}

export default Detail;