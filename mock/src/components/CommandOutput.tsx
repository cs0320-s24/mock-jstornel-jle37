import {
  defaultCommandDictionary,
  updateDictionary,
} from "../methods/commands";

interface commandOutputProps {
  history: string[];
}

export function getOutputType(command: string, isVerbose: boolean) {
  const commandArray = command.split(" ");
  const commandDictionary = defaultCommandDictionary(commandArray.at(-1)!, isVerbose);
  // updateDictionary(commandDictionary, "mode", "mode changed");

  for (var key in commandDictionary) {
    if (command.includes(key)) {
      return commandDictionary[key];
    }
  }
  return "Not a command";
}
