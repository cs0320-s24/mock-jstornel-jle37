import { useState } from "react";
import "../styles/App.css";
import { LoginButton } from "./buttons/LoginButton";
import { OutputMode } from "./buttons/OutputMode";
import REPL from "./REPL/REPL";

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
        <LoginButton isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        {/* <OutputMode isVerbose={isVerbose} setIsVerbose={setIsVerbose} /> */}
      </p>
      {isLoggedIn && <REPL />}
    </div>
  );
}

export default App;
