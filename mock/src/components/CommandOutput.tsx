import { tableContent } from "../methods/view";

const commandDictionary: { [key: string]: any } = {};
commandDictionary["load"] = "success";
commandDictionary["view"] = tableContent;
commandDictionary["search"] = "Row 1";

export function getOutputType(command: string) {
  for (var key in commandDictionary) {
    if (command.includes(key)) {
      return commandDictionary[key];
    }
  }
  return "Not a command";
}
