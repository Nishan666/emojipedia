import React, { useState } from "react";
import Emotes from "./Emotes";
import emojipedia from "../emojipedia";
import Pagination from "./Pagination";
import Search from "./Search";

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

function Entrys() {
  const [page , setPage] = useState(1);

  const [serach , setSearch] = useState(emojipedia);

  const total = Math.round(serach.length / 30);

  return (<>
  <Search setSearch={setSearch} setPage={setPage}/>
  <dl className="dictionary">{serach.slice((page-1)*30,((page-1)*30)+30).map(createEmotes)}</dl>
  <Pagination page={page} setPage={setPage} total={total}/>
  </>)


}

export default Entrys;
