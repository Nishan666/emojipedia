import React from "react";
import emojipedia from "../emojipedia";

const Search = (props)=>{


    const handleChange = (event)=>{
        console.log(event.target.value);
        const tag = event.target.value.toLowerCase();


        const result = emojipedia.filter((x)=>{return x.name.toLowerCase().includes(tag)})

        // working 
        // emojipedia.forEach((x)=>{
        //     if(x.name.toLowerCase().includes(tag)){
        //     console.log(x.name);
        //     }
        // })

        props.setSearch(result)
        props.setPage(1)
    }

    return (<div style={{textAlign:"center"}}>
 <input  type="text" placeholder="Search.." onChange={handleChange}></input>
</div>)
}

export default Search;




