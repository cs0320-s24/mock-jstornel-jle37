import { Dispatch, SetStateAction, useState } from "react";
import { view } from "../methods/view";
import {
  defaultCommandDictionary,
  updateDictionary,
} from "../methods/commands";

interface commandOutputProps {
  history: string[];
}

export function getOutputType(command: string, isVerbose: boolean, currFile: string, setCurrFile: Dispatch<SetStateAction<string>>) {
  // const [filepath, setFilepath] = useState<string>("");
  const commandArray = command.split(" ");
  if (commandArray.at(0)! === "load") {
    setCurrFile(commandArray.at(-1)!);
  }
  console.log(commandArray.at(-1)!);
  // setCurrFile(commandArray.at(-1)!);
  //currFile = commandArray.at(-1)!;
  console.log(currFile);
  // setFilepath(commandArray[1]);

  const commandDictionary = defaultCommandDictionary(currFile, isVerbose);
  // updateDictionary(commandDictionary, "mode", "mode changed");

  for (var key in commandDictionary) {
    if (command.includes(key)) {
      return commandDictionary[key];
    }
  }
  return "Not a command";
}
