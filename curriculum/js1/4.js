/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (a, b, result='') => {
  if (a===0) return result;
    result = result + b;
  return solution(a-1, b, result);
};

module.exports = {
  solution,
};
