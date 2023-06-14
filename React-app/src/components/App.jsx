import React, { createContext, useEffect, useState } from "react";
import routes from "../routers/route";
import emojipedia from "../emojipedia";
import { useNavigate } from "react-router-dom";
import { Dna } from 'react-loader-spinner'  //is a npm package

// creating context Api ->createContext() , provider , consumer/useContext Hook
const EmojiArray = createContext();
const SetEmojiArray = createContext();

function App() {
  const navigate = useNavigate();

// initialize emojis with array of object ->emojipedia
  const [emojis, setEmojis] = useState(emojipedia);

  // for loading screen
  const [loading, setLoading] = useState(true)

  // run only once after page load , used for showing loading screen 
  useEffect(() => {
    console.log("Welcome to Emojipedia(u can use this as model or alert or tostify)");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000)
    // loading screen stays for 2 sec
  }, [])
  // [] means only once after page load

  return (
    <div className={loading ? "loadingScreen" : "App"}>
      {
        loading ?
        // via imported npm package , loading DNA
          (<Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />)
          :
          (<EmojiArray.Provider value={emojis}>
            <SetEmojiArray.Provider value={setEmojis}>
              {/* heading (title) */}
              <h1 className="heading">
                <span className="headingSpan" onClick={() => navigate("/")}>emojipedia</span>
              </h1>
              {/* main content ,which is based on route */}
              {routes}
            </SetEmojiArray.Provider>
          </EmojiArray.Provider>)
      }

    </div>
  );
}

export default App;

export { EmojiArray, SetEmojiArray }
