import React from 'react';
import { Text } from '@chakra-ui/react';
import { isValid } from '../utils';

export const LengthValidator = ({ firstLength, secondLength, thirdLength }) => {
  const arrayFormat = [firstLength, secondLength, thirdLength].sort(
    compareNumbers
  );

  function compareNumbers(a, b) {
    return a - b;
  }

  const { value, message } = isValid(arrayFormat);

  return (
    <Text fontSize="xl" color={value ? 'green' : 'red'}>
      {message}
    </Text>
  );
};
