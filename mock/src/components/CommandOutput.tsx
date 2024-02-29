import { useState } from "react";
import { view } from "../methods/view";

interface commandOutputProps {
  history: string[];
}
export function getOutputType(command: string) {
  function getFilePath() {
    for (var val of ["load", "view", "search"]) {
      if (command.includes(val)) {
        const filepath = command.substring(
          command.indexOf(val) + val.length + 1
        );
        return filepath;
      }
    }
    return command;
  }

  const str = getFilePath();

  const commandDictionary: { [key: string]: any } = {};
  commandDictionary["load"] = "successfully loaded " + str;
  commandDictionary["view"] = view(str);
  commandDictionary["search"] = view(str).at(1);

  for (var key in commandDictionary) {
    if (command.includes(key)) {
      return commandDictionary[key];
    }
  }
  return "Not a command";
}
