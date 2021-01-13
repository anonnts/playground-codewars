
// Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.

// For Example:

// [
//   [1, 2, 3, 4, 5],       // minimum value of row is 1
//   [5, 6, 7, 8, 9],       // minimum value of row is 5
//   [20, 21, 34, 56, 100]  // minimum value of row is 20
// ]

function sumOfMinimums(arr) {
    let temp = []
    for (let index= 0; index < arr.length; index++ ) {
      const min = Math.min(...arr[index])
      temp.push(min)
    }
      return temp.reduce((acc, cur) =>  acc + cur ,0)
}