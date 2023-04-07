import SideBar from "./components/SideBar";
import SudokuBoard from "./components/SudokuBoard";
import SudokuToolset from "./components/SudokuToolset";
import Timer from "./components/Timer";
import SudokuKeyboard from "./components/SudokuKeyboard";

import "./index.scss";
import AnimatedPage from "../../shared/components/AnimatedPage";

const Game = () => {
  return (
    <AnimatedPage>
      <div className="game" style={{ height: "100%" }}>
        <SideBar />
        <div className="game__dashboard">
          <div className="game__dashboard__header">
            <Timer />
            <SudokuToolset />
          </div>
          <SudokuKeyboard />
        </div>

        <SudokuBoard />
      </div>
    </AnimatedPage>
  );
};
export default Game;
