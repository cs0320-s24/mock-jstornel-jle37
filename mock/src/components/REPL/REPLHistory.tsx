import "../../styles/main.css";
import { getOutputType } from "../commands/CommandOutput";

interface REPLHistoryProps {
  // TODO: Fill with some shared state tracking all the pushed commands
  history: string[];
  isVerbose: boolean;
}

export function REPLHistory(props: REPLHistoryProps) {
  return (
    <div className="repl-history">
      {/* This is where command history will go */}
      {/* TODO: To go through all the pushed commands... try the .map() function! */}
      {/* Returns the appropriate output given the current mode; makes a call to getOutputType*/}
      {props.history.map((command, index) =>
        props.isVerbose ? (
          <p>
            Command: {command} <br></br> Output:{" "}
            {getOutputType(command, props.isVerbose)}
          </p>
        ) : (
          <p>Output: {getOutputType(command, props.isVerbose)}</p>
        )
      )}
    </div>
  );
}
