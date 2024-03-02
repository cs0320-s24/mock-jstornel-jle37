import { useState } from "react";
import "../styles/App.css";
import { LoginButton } from "./LoginButton";
import { OutputMode } from "./OutputMode";
import REPL from "./REPL";

/**
 * This is the highest level component!
 */
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  // const [isVerbose, setIsVerbose] = useState<boolean>(false);
  const [loginString, setLoginString] = useState<string>("");

  return (
    <div className="App">
      <p className="App-header">
        <h1>Mock</h1>
        <LoginButton
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        {/* <OutputMode isVerbose={isVerbose} setIsVerbose={setIsVerbose} /> */}
      </p>
      {isLoggedIn && <REPL />}
    </div>
  );
}

export default App;
