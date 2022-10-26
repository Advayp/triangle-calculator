export const isValid = arrayFormat => {
  if (arrayFormat[0] <= 0 || arrayFormat[1] <= 0 || arrayFormat[2] <= 0) {
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
