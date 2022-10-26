import React from 'react';
import { Input, Text, HStack } from '@chakra-ui/react';

export const Prompt = ({ label, valueRef }) => {
  return (
    <>
      <HStack spacing={3}>
        <Text minW={'max-content'} fontSize={'md'}>
          {label}
        </Text>
        <Input
          placeholder="Enter a positive number"
          size="md"
          type="number"
          onChange={event => {
            valueRef(parseFloat(event.target.value));
          }}
        ></Input>
      </HStack>
    </>
  );
};
