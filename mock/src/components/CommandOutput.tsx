import { useState } from "react";
import { tableContent } from "../methods/view";
import { table } from "console";

const commandDictionary: { [key: string]: any } = {};
commandDictionary["load"] = "success";
commandDictionary["view"] = tableContent;
commandDictionary["search"] = tableContent.at(1);

export function getOutputType(command: string) {
  for (var key in commandDictionary) {
    if (command.includes(key)) {
      return commandDictionary[key];
    }
  }
  return "Not a command";
}
