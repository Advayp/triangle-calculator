import React from 'react';
import { Text } from '@chakra-ui/react';
import { isValid, compareNumbers } from '../utils';

export const LengthValidator = ({ firstLength, secondLength, thirdLength }) => {
  const arrayFormat = [firstLength, secondLength, thirdLength].sort(
    compareNumbers
  );

  const { value, message } = isValid(arrayFormat);

  return (
    <Text fontSize="xl" color={value ? 'green' : 'red.500'}>
      {message}
    </Text>
  );
};
