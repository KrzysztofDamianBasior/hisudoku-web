// A simple naive solution can be.

// Randomly take any number 1-9.
// Check if it is safe to put in the cell.(row , column and box)
// If safe, place it and increment to next location and go to step 1.
// If not safe, then without incrementing go to step 1.
// Once matrix is fully filled, remove k no. of elements randomly to complete game.

// Improved Solution : We can improve the solution, if we understand a pattern in this game. We can observe that all 3 x 3 matrices, which are diagonally present are independent of other 3 x 3 adjacent matrices initially, as others are empty.

// 3 8 5 0 0 0 0 0 0
// 9 2 1 0 0 0 0 0 0
// 6 4 7 0 0 0 0 0 0
// 0 0 0 1 2 3 0 0 0
// 0 0 0 7 8 4 0 0 0
// 0 0 0 6 9 5 0 0 0
// 0 0 0 0 0 0 8 7 3
// 0 0 0 0 0 0 9 6 2
// 0 0 0 0 0 0 1 4 5

// (We can observe that in above matrix, the diagonal matrices are independent of other empty matrices initially). So if we fill them first, then we will only have to do box check and thus column/row check not required

// Secondly, while we fill rest of the non-diagonal elements, we will not have to use random generator, but we can fill recursively by checking 1 to 9.

// Following is the improved logic for the problem.
// 1. Fill all the diagonal 3x3 matrices.
// 2. Fill recursively rest of the non-diagonal matrices.
//    For every cell to be filled, we try all numbers until
//    we find a safe number to be placed.
// 3. Once matrix is fully filled, remove K elements
//    randomly to complete game.

//How do you generate a Sudoku board with a unique solution? What I thought was to initialize a random board and then remove some numbers. But my question is how do I maintain the uniqueness of a solution?

export {};
