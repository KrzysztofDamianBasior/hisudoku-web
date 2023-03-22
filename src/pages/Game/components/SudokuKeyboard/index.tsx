import KeyboardButton from "../KeyboardButton";

const SudokuKeyboard = () => {
  return (
    <div className="sudoku-keyboard">
      <div className="sudoku-keyboard__top">
        <div className="sudoku-keyboard__element">
          <KeyboardButton>notes</KeyboardButton>
        </div>
        <div className="sudoku-keyboard__element">
          <KeyboardButton>undo</KeyboardButton>
        </div>
      </div>
      <div className="sudoku-keyboard__section ">
        <div className="sudoku-keyboard__element">
          <KeyboardButton>1</KeyboardButton>
        </div>
        <div className="sudoku-keyboard__element">
          <KeyboardButton>2</KeyboardButton>
        </div>
        <div className="sudoku-keyboard__element">
          <KeyboardButton>3</KeyboardButton>
        </div>
        <div className="sudoku-keyboard__element">
          <KeyboardButton>4</KeyboardButton>
        </div>
        <div className="sudoku-keyboard__element">
          <KeyboardButton>5</KeyboardButton>
        </div>
      </div>
      <div className="sudoku-keyboard__section">
        <div className="sudoku-keyboard__element">
          <KeyboardButton>6</KeyboardButton>
        </div>
        <div className="sudoku-keyboard__element">
          <KeyboardButton>7</KeyboardButton>
        </div>
        <div className="sudoku-keyboard__element">
          <KeyboardButton>8</KeyboardButton>
        </div>
        <div className="sudoku-keyboard__element">
          <KeyboardButton>9</KeyboardButton>
        </div>
        <div className="sudoku-keyboard__element">
          <KeyboardButton>erase</KeyboardButton>
        </div>
      </div>
    </div>
  );
};
export default SudokuKeyboard;
