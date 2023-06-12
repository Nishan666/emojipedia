import React, { createContext, useEffect, useState } from "react";
import routes from "../routers/route";
import emojipedia from "../emojipedia";
import { useNavigate } from "react-router-dom";
import { Dna } from  'react-loader-spinner'


const EmojipediaSearch = createContext();
const EmojipediaSSetearch = createContext();

function App() {

  // for loading screen
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    console.log("Welcome to Emojipedia(u can use this as model or alert or tostify)");
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },2000)
  },[])

  const navigate = useNavigate();

  const [serach,setSearch] = useState(emojipedia);

  return (

    <div className={loading ? "app": "App"}>
      {
        loading ? 
(<Dna
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
/>)
        :
        (<EmojipediaSearch.Provider value={serach}>
          <EmojipediaSSetearch.Provider value={setSearch}>
          <h1 className="heading">
              <span className="headingSpan" onClick={()=>navigate("/")}>emojipedia</span>
            </h1>
          {routes}
          </EmojipediaSSetearch.Provider>
          </EmojipediaSearch.Provider>)
      }

    </div>
  );
}

export default App;

export {EmojipediaSearch , EmojipediaSSetearch}
