import { getMockedJson } from "../../data/dataMap";

export function view(command: string) {
  const data = getMockedJson(command);
  const tableContent = data!.map((row) => {
    return (
      <table aria-label = {"viewTable"} align="center">
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
}
