import { createElement } from "react";
import { getMockedJson, dataMap } from "../../data/dataMap";

interface viewCSVProps {
  history: string[];
}

export function view(command: string) {
  // const len = props.history.length;
  // const command = props.history[-1];
  // const filepath = command.substring(command.indexOf("data/"));
  const data = getMockedJson(command);
  const tableContent = data!.map((row) => {
    return (
      <table align="center">
        {
          <tr>
            {row.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
        }
      </table>
    );
  });

  return tableContent;
  // return [[command]];
}
