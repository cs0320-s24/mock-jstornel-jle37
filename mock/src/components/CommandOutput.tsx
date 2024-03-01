import { useState } from "react";
import { view } from "../methods/view";

interface commandOutputProps {
  history: string[];
}

export function getOutputType(command: string) {
  // const [filepath, setFilepath] = useState<string>("");
  const commandArray = command.split(" ");
  // setFilepath(commandArray[1]);

  const commandDictionary: { [key: string]: any } = {};
  commandDictionary["load"] = "successfully loaded " + commandArray.at(-1);
  commandDictionary["view"] = view(commandArray.at(-1)!);
  commandDictionary["search"] = view(commandArray.at(-1)!).at(1);

  for (var key in commandDictionary) {
    if (command.includes(key)) {
      return commandDictionary[key];
    }
  }
  return "Not a command";
}
