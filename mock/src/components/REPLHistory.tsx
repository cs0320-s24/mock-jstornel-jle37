import "../styles/main.css";
import { getMockedJson } from "../../data/dataMap";
import { tableContent } from "../methods/view";

interface REPLHistoryProps {
  // TODO: Fill with some shared state tracking all the pushed commands
  history: string[];
}
export function REPLHistory(props: REPLHistoryProps) {
  return (
    <div className="repl-history">
      {/* This is where command history will go */}
      {/* TODO: To go through all the pushed commands... try the .map() function! */}
      {props.history.map((command, index) => (
        <p>
          Command: {command} <br></br> Output: {tableContent}
        </p>
      ))}
    </div>
  );
}
