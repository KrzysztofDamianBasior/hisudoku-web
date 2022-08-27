export const stringToBoard = (sudokuString: string) => {
  const rows = sudokuString.split(";");
  let board: number[][] = [];
  for (const key in rows) {
    let matches = rows[key].match(/[0-9]/g);

    if (matches !== null) {
      let num = matches.map((num) => parseInt(num));
      board.push(num);
    }
  }
  return board;
};

export const validateSudokuString = (str) => {
  return /^([0-9]{3}\.[0-9]{3}\.[0-9]{3};){9}$/.test(str);
};
