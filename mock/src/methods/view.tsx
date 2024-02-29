import { createElement } from "react";
import { getMockedJson } from "../../data/dataMap";
import { exampleHouses } from "../../data/mockedJson";

interface viewCSVProps {
  mockedJson: (string | number | boolean)[][];
  isBrief: boolean;
}

// if (input) in dataMap {
//     const data = getMockedJson("data/exampleHouses.csv");
// }


export const tableContent = exampleHouses.map((row) => {
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
