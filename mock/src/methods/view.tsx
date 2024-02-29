import { createElement } from "react";
import { getMockedJson } from "../../data/dataMap";
import { exampleHouses } from "../../data/mockedJson";

interface viewCSVProps {
  // TODO: Fill with some shared state tracking all the pushed commands
  mockedJson: (string | number | boolean)[][];
  isBrief: boolean;
}

const data = getMockedJson("data/exampleHouses.csv");

export const tableContent = data!.map((row) => {
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
