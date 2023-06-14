import React, { useContext, useState } from "react";
import Emotes from "./Emotes";
import Pagination from "./Pagination";
import Search from "./Search";
import {EmojiArray , } from "../App"


// createEmotes will dispaly the single card every time the function is called
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

const Home= ()=> {
  const [page , setPage] = useState(1);  //for pagenation ,intially the pageno is 1
  const emojis = useContext(EmojiArray);
  const total = Math.round(emojis.length / 30); //30 implies =>30 emojis will be showed in single page

  return (<>
  {/* search bar */}
  <Search setPage={setPage}/> 
  {/* emoji cards */}
  <dl className="dictionary">{emojis.slice((page-1)*30,((page-1)*30)+30).map(createEmotes)}</dl>
  {/* Pagination */}
  <Pagination page={page} setPage={setPage} total={total}/>
  </>)


}

export default Home;
