import "../../styles/main.css";
import { Dispatch, SetStateAction, useState } from "react";
import { ControlledInput } from "../commands/ControlledInput";

interface REPLInputProps {
  // TODO: Fill this with desired props... Maybe something to keep track of the submitted commands
  history: string[];
  setHistory: Dispatch<SetStateAction<string[]>>;
  isVerbose: boolean;
  setVerbose: Dispatch<SetStateAction<boolean>>;
}

// You can use a custom interface or explicit fields or both! An alternative to the current function header might be:
// REPLInput(history: string[], setHistory: Dispatch<SetStateAction<string[]>>)
export function REPLInput(props: REPLInputProps) {
  // Remember: let React manage state in your webapp.
  // Manages the contents of the input box
  const [commandString, setCommandString] = useState<string>("");
  //creates a count variable and state
  const [count, setCount] = useState<number>(0);

  //Updates REPL information after each command is entered
  function handleSubmit(commandString: string) {
    /*Updates the isVerbose state each time the mode command is entered*/
    if (commandString === "mode") {
      props.setVerbose(!props.isVerbose);
    }
    setCount(count + 1);
    props.setHistory([...props.history, commandString]);
    setCommandString("");
  }
  return (
    <div className="repl-input">
      {/* This is a comment within the JSX. Notice that it's a TypeScript comment wrapped in
            braces, so that React knows it should be interpreted as TypeScript */}
      {/* I opted to use this HTML tag; you don't need to. It structures multiple input fields
            into a single unit, which makes it easier for screenreaders to navigate. */}
      <fieldset>
        <legend>Enter a command:</legend>
        <ControlledInput
          value={commandString}
          setValue={setCommandString}
          ariaLabel={"Command input"}
          placeholderText={"Enter command here!"}
        />
      </fieldset>
      <button aria-label={"Submit"} onClick={() => handleSubmit(commandString)}>
        Submitted {count} times
      </button>
    </div>
  );
}
