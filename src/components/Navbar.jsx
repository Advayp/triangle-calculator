import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

export const Navbar = () => {
  return (
    <>
      <Flex
        align={'center'}
        width="100vw"
        height={'7vh'}
        position="sticky"
        as="header"
        borderBottomWidth={'1.5px'}
        mb={'2'}
        justify="center"
      >
        <Text fontSize={'2xl'} fontWeight="semibold">
          Triangle Calculator
        </Text>
      </Flex>
    </>
  );
};
