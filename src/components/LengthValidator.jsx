import React, { useRef } from 'react';
import { Text } from '@chakra-ui/react';

export const LengthValidator = ({
  firstLength,
  secondLength,
  thirdLength,
  validRef,
}) => {
  const message = useRef('Invalid');

  const arrayFormat = [firstLength, secondLength, thirdLength].sort(
    compareNumbers
  );

  function compareNumbers(a, b) {
    return a - b;
  }

  const isValid = () => {
    if (arrayFormat[0] <= 0 || arrayFormat[1] <= 0 || arrayFormat[2] <= 0) {
      message.current = 'Invalid: the numbers must be positive';
      validRef.current = false;
      return false;
    }

    if (arrayFormat[0] + arrayFormat[1] <= arrayFormat[2]) {
      message.current = 'Invalid numbers (triangle inequality)';
      validRef.current = false;
      return false;
    }

    message.current = 'Valid';
    validRef.current = true;
    return true;
  };

  return (
    <Text fontSize="md" color={isValid() ? 'green' : 'red'}>
      {message.current}
    </Text>
  );
};
