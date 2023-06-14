import React, { useContext } from "react";
import emojipedia from "../../emojipedia";
import { EmojiArray, SetEmojiArray } from "../App"

// for Search bar and its property 
// props ->setPage
const Search = (props) => {
    const emojis= useContext(EmojiArray);
    const setEmojis = useContext(SetEmojiArray);

    // onclick of backspace repopulate the search Array will all the data 
    const handleKeyDown = (event) => {
        if (event.key === 'Backspace') {
            setEmojis(emojipedia);
        }
    }


    const handleChange = async (event) => {
        const change = event.target.value;
        // result is an array with matching name as with inputed value
        const result = emojis.filter((x) => { return x.name.toLowerCase().includes(change.toLowerCase()) })
        // reset emoji Array
        setEmojis(result)
        props.setPage(1)
    }

    return (<div className="search">
        <input className="searchInput" type="text" placeholder="Search.." onChange={handleChange} onKeyDown={handleKeyDown}></input>
    </div>)
}

export default Search;




