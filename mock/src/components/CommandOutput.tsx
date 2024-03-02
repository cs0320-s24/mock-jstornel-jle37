import { useState } from "react";
import { view } from "../methods/view";
import {
  defaultCommandDictionary,
  updateDictionary,
} from "../methods/commands";

interface commandOutputProps {
  history: string[];
  filepath: string;
}

export function getOutputType(command: string, isVerbose: boolean) {
  // const [filepath, setFilepath] = useState<string>("");
  const commandArray = command.split(" ");
  // setFilepath(commandArray[1]);

  const commandDictionary = defaultCommandDictionary(
    commandArray.at(-1)!,
    isVerbose
  );
  // updateDictionary(commandDictionary, "mode", "mode changed");
  if (commandArray[0] == "load") {
    setIsLoaded(true);
    setFilePath(commandArray[1]);
  }

  for (var key in commandDictionary) {
    if (command.includes(key)) {
      return commandDictionary[key];
    }
  }
  return "Not a command";
}
