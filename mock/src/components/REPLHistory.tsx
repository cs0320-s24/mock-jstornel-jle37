import "../styles/main.css";
// import { getMockedJson } from "../../data/dataMap";
// import { tableContent } from "../methods/view";
import { getOutputType } from "./CommandOutput";
import { Dispatch, SetStateAction, useState } from "react";

interface REPLHistoryProps {
  // TODO: Fill with some shared state tracking all the pushed commands
  history: string[];
  isVerbose: boolean;
  currFile: string;
  setCurrFile: Dispatch<SetStateAction<string>>;
}

export function REPLHistory(props: REPLHistoryProps) {
  
  return (
    <div className="repl-history">
      {/* This is where command history will go */}
      {/* TODO: To go through all the pushed commands... try the .map() function! */}
      {props.history.map((command, index) =>
        props.isVerbose ? (
          <p>
            Command: {command} <br></br> Output: {getOutputType(command, props.isVerbose, props.currFile, props.setCurrFile)}
          </p>
        ) : (
          <p>Output: {getOutputType(command, props.isVerbose, props.currFile, props.setCurrFile)}</p>
        )
      )}
    </div>
  );
}
