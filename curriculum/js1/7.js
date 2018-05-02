/**
 * isPrime - returns if number is prime
 *    Prime: numbers can only be divided by 1 and itself
 * @param {number} a
 * @returns {boolean}
 */

const solution = (a, i=3) => {
  if (a === i || a === 2) return true;
  if (a === 1 || a % i === 0) return fales;
  return solution(a, i+1);
};
module.exports = {
  solution,
};
