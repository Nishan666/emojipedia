import React, { useContext, useState } from "react";
import Emotes from "./Emotes";
import Pagination from "./Pagination";
import Search from "./Search";

import {EmojipediaSearch , EmojipediaSSetearch} from "../App"


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

const Entrys = ()=> {
  const [page , setPage] = useState(1);

  const serach = useContext(EmojipediaSearch);
  const setSearch = useContext(EmojipediaSSetearch);

  const total = Math.round(serach.length / 30);

  return (<>
  <Search setSearch={setSearch} setPage={setPage}/>
  <dl className="dictionary">{serach.slice((page-1)*30,((page-1)*30)+30).map(createEmotes)}</dl>
  <Pagination page={page} setPage={setPage} total={total}/>
  </>)


}

export default Entrys;
