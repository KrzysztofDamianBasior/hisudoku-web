import SudokuCell from "../SudokuCell";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

const SudokuBoard = () => {
  const theme = useTheme();

  return (
    <SudokuTable
      innerBorderColor={theme.palette.mode === "light" ? "black" : "black"}
      outerBorderColor={theme.palette.mode === "light" ? "black" : "black"}
    >
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rindex) => {
        return (
          <tr key={rindex} className={(row + 1) % 3 === 0 ? "bBorder" : ""}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, cindex) => {
              return (
                <td
                  key={cindex}
                  className={(col + 1) % 3 === 0 ? "rBorder" : ""}
                >
                  <SudokuCell row={row} col={col} />
                </td>
              );
            })}
          </tr>
        );
      })}
    </SudokuTable>
  );
};
export default SudokuBoard;

const SudokuTable = styled("table")<{
  outerBorderColor: string;
  innerBorderColor: string;
}>`
  border-collapse: collapse;
  border: 6px solid;
  border-color: ${(props) => props.outerBorderColor};
  .bBorder {
    border-bottom: 4px solid;
    border-color: ${(props) => props.innerBorderColor};
  }
  .rBorder {
    border-right: 4px solid;
    border-color: ${(props) => props.innerBorderColor};
  }
`;
