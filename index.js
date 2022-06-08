/** @module LowEfficiencySolution */

/**
 * @function quickSort
 * @description This method sorts the given array using quick sort algorithm
 * @param {Array} resultList Unsorted Array
 * @returns {Array} Sorted Array
 */

//Quick sort
function quickSort(resultList) {
  if (resultList.length <= 1) {
    return resultList;
  }
  let pivotElement = resultList[0];

  let leftElement = [];
  let rightElement = [];

  for (let i = 1; i < resultList.length; i++) {
    resultList[i] < pivotElement
      ? leftElement.push(resultList[i])
      : rightElement.push(resultList[i]);
  }

  return quickSort(leftElement).concat(pivotElement, quickSort(rightElement));
}

/**
 * @function binarySearch
 * @description This method sorts the given array using quick sort algorithm
 * @param {Number} randNumber Number to be searched
 * @param {Array} resultList Unsorted Array
 * @returns {Boolean} Return a boolean indicating the number is present in the array or not
 */
//Binary search
function binarySearch(randNumber, resultList) {
  //if this is the fist element in list, just push it.
  //else do a binary search and if element is not duplicate, push it.

  //Sort the array for binary search
  resultList = quickSort(resultList);
  //Binary search
  let startIndex = 0;
  let endIndex = resultList.length - 1;

  while (startIndex <= endIndex) {
    let midIndex = Math.floor((startIndex + endIndex) / 2);

    if (resultList[midIndex] === randNumber) {
      return true;
    }

    if (randNumber < resultList[midIndex]) {
      endIndex = midIndex - 1;
    } else {
      startIndex = midIndex + 1;
    }
  }
  return false;
}

/**
 * @function solution
 * @description This method return a list of 10000 unique random numbers
 * @returns {Array} Returns an array of unique random numbers
 */
function solution() {
  let resultList = [];
  while (resultList.length < 10000) {
    let randNumber = parseInt(Math.random() * 10000 + 1);
    if (resultList.length < 1) {
      resultList.push(randNumber);
    } else if (!binarySearch(randNumber, resultList)) {
      resultList.push(randNumber);
    }
  }
  return resultList;
}

console.log(solution());
