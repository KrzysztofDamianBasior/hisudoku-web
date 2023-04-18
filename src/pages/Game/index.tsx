import Box from "@mui/material/Box";

// import SideBar from "../../shared/components/SideBar";
import SideBar from "../../shared/components/SideBar";
import SudokuBoard from "./components/SudokuBoard";
import SudokuToolset from "./components/SudokuToolset";
import Timer from "./components/Timer";
import SudokuKeyboard from "./components/SudokuKeyboard";

import AnimatedPage from "../../shared/components/AnimatedPage";

const Game = () => {
  return (
    <AnimatedPage>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SideBar />
        <Box
          sx={{
            marginRight: "50px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{}}>
              <SudokuToolset />
            </Box>
            <Timer />
          </Box>
          <SudokuKeyboard />
        </Box>

        <SudokuBoard />
      </Box>
    </AnimatedPage>
  );
};
export default Game;
