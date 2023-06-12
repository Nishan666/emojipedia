import React , {useContext} from "react";
import emojipedia from "../../emojipedia";


import {EmojipediaSearch , EmojipediaSSetearch} from "../App"

const Search = (props)=>{

    const serach = useContext(EmojipediaSearch);
    const setSearch = useContext(EmojipediaSSetearch);

    const handleKeyDown = (event)=>{

        if (event.key === 'Backspace') {
            setSearch(emojipedia);
            // console.log("backspace");
        }
    }


    const handleChange = async (event)=>{
        const change = event.target.value;

        const result = serach.filter((x)=>{return x.name.toLowerCase().includes(change.toLowerCase())})

        // working 
        // emojipedia.forEach((x)=>{
        //     if(x.name.toLowerCase().includes(tag)){
        //     console.log(x.name);
        //     }
        // })
        // console.log(result);

        props.setSearch(result)
        props.setPage(1)
    }

    return (<div className="search">
 <input className="searchInput" type="text" placeholder="Search.." onChange={handleChange} onKeyDown={handleKeyDown}></input>
</div>)
}

export default Search;




