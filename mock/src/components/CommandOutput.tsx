import {
  defaultCommandDictionary,
  updateDictionary,
} from "../methods/commands";

/**
 * Function that returns the appropriate output for a given command
 * @param command input string given by user
 * @param isVerbose boolean describing output mode
 * @returns the appropriate call pulled from commandDictionary
 */
export function getOutputType(command: string, isVerbose: boolean) {
  const commandArray = command.split(" ");
  const commandDictionary = defaultCommandDictionary(commandArray.at(-1)!, isVerbose);

  //Test call for update dictionary (User Story 6)
  // updateDictionary(commandDictionary, "mode", "mode changed");

  for (var key in commandDictionary) {
    if (command.includes(key)) {
      return commandDictionary[key];
    }
  }
  return "Not a command";
}
