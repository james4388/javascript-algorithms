/**
 * Iterative version of Euclidean Algorithm of finding greatest common divisor (GCD).
 * @param {number} originalA
 * @param {number} originalB
 * @return {number}
 */
export default function euclideanAlgorithmIterative(originalA, originalB) {
  // Make input numbers positive.
  let a = Math.abs(originalA);
  let b = Math.abs(originalB);

  // Subtract one number from another until both numbers would become the same.
  // This will be out GCD. Also quit the loop if one of the numbers is zero.
  // a && b && a !== b
  // To make algorithm work faster instead of subtracting one number from the other
  // we may use modulo operation. 
  // b !== 0
  while (b !== 0) {
    [a, b] = [b, a % b];
  }

  // Return the number that is not equal to zero since the last subtraction (it will be a GCD).
  return a;
}
