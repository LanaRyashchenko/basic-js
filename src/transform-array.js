const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  let randArr = [];
  let result = [];
  let newResult = [];

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr.length !== 0) {
  for (let elem = 0; elem < arr.length; elem++) {
    randArr.push(arr[elem]);
  }

  let doublenextIndex = randArr.indexOf('--double-next');
  let doubleprevIndex = randArr.indexOf('--double-prev');
  let discardnextIndex = randArr.indexOf('--discard-next');
  let discardprevIndex = randArr.indexOf('--discard-prev');

  for (let i = 0; i < randArr.length; i++) {
    if (i == discardnextIndex) {
      if (i !== randArr.length-1) {
      result.push(randArr[i+1] = 'null');
    }
    else {
      continue;
    }
  }
  else if (i == discardprevIndex) {
    if (i !== 0) {
      result[i-1] = 'null';
    //  result.push(randArr[i-1] = 'null');
   //   console.log(result);
    }
    else {
      continue;
    }
  }
    else if (i == doublenextIndex) {
      if (i !== randArr.length-1)
      {
        result.push(randArr[i+1]);
      }
      else {
       continue;
      }
    }
    else if (i == doubleprevIndex) {
      if (i !== 0) {
      result.push(randArr[i-1]);
    }
    else {
      continue;
    }
  }
    else {
      result.push(randArr[i]);
    }
  }
  }
  else {
    result = arr;
  }
  for (let el = 0; el < result.length; el++) {
    if (result[el] == 'null') {
      continue;
    } else {
      newResult.push(result[el]);
    }
  } return newResult;
}
try {
  transform(arr);
} catch (e) {
  console.error(e);
}


module.exports = {
  transform
};
