import React, { createContext, useEffect, useState } from "react";
import routes from "../routers/route";
import emojipedia from "../emojipedia";
import { useNavigate } from "react-router-dom";

const EmojipediaSearch = createContext();
const EmojipediaSSetearch = createContext();

function App() {
  useEffect(()=>{console.log("Welcome to Emojipedia(u can use this as model or alert or tostify)");},[])

  const navigate = useNavigate();

  const [serach,setSearch] = useState(emojipedia);

  return (

    <div>
    <EmojipediaSearch.Provider value={serach}>
    <EmojipediaSSetearch.Provider value={setSearch}>
    <h1 className="heading">
        <span className="headingSpan" onClick={()=>navigate("/")}>emojipedia</span>
      </h1>
    {routes}
    </EmojipediaSSetearch.Provider>
    </EmojipediaSearch.Provider>
    </div>
  );
}

export default App;

export {EmojipediaSearch , EmojipediaSSetearch}
