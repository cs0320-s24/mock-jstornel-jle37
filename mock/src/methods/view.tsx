import { getMockedJson } from "../../data/dataMap";

/**
 * function that fetches mocked data and creates an HTML 
 * table of its contents to display to the user
 * @param command flepath of data to be retrieved and displayed
 * @returns an HTML table with the appropriate data
 */
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
