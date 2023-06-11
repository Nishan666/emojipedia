import React, { useEffect } from "react";
import Entrys from "./Entrys";

function App() {
  useEffect(()=>{console.log("Welcome to Emojipedia(u can use this as model or alert or tostify)");},[])
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <Entrys />
    </div>
  );
}

export default App;
