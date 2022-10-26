export const isValid = arrayFormat => {
  if (Array.prototype.some(el => el <= 0 || isNaN(el))) {
    return { value: false, message: 'Invalid: numbers must be positive' };
  }

  if (arrayFormat[0] + arrayFormat[1] <= arrayFormat[2]) {
    return { value: false, message: 'Invalid (triangle inequality)' };
  }

  return {
    value: true,
    message: 'Valid',
  };
};
export function compareNumbers(a, b) {
  return a - b;
}
