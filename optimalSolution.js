/** @module OptimalSolution */

/**
 * @function solution
 * @description This method return a list of 10000 unique random numbers
 * @returns {Set} Returns a list of unique random numbers
 */
const solution = () => {
  let resultList = new Set();
  while (resultList.size < 10000) {
    let randNumber = Math.floor(Math.random() * 10000) + 1;
    resultList.add(randNumber);
  }
  return resultList;
};

console.log(solution());
