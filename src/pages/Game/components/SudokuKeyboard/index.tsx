import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";

import KeyboardButton from "../KeyboardButton";

const KeyboardElement: SxProps = {
  margin: "10px",
  width: "18%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};
const KeyboardTop: SxProps = {
  width: "100%",
  height: "30%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
};

const KeyboardSection: SxProps = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "30%",
};

const SudokuKeyboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "space-between",
        width: "500px",
        height: "200px",
      }}
    >
      <Box sx={KeyboardTop}>
        <Box sx={KeyboardElement}>
          <KeyboardButton mode="erase" value="notes" />
        </Box>
        <Box sx={KeyboardElement}>
          <KeyboardButton mode="undo" value="undo" />
        </Box>
      </Box>
      <Box sx={KeyboardSection}>
        {[1, 2, 3, 4, 5].map((num) => (
          <Box sx={KeyboardElement} key={num}>
            <KeyboardButton mode="number" value={num} />
          </Box>
        ))}
      </Box>
      <Box sx={KeyboardSection}>
        {[6, 7, 8, 9].map((num) => (
          <Box sx={KeyboardElement} key={num}>
            <KeyboardButton mode="number" value={num} />
          </Box>
        ))}
        <Box sx={KeyboardElement}>
          <KeyboardButton mode="erase" value="erase" />
        </Box>
      </Box>
    </Box>
  );
};
export default SudokuKeyboard;
