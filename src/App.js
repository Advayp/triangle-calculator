import React, { useRef } from 'react';
import { ChakraProvider, theme, Box, VStack, Button } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import { Prompt } from './components/Prompt';

function App() {
  // probably not ideal
  const firstLength = useRef(0);
  const secondLength = useRef(0);
  const thirdLength = useRef(0);

  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box textAlign="center" fontSize="xl" w={'80vw'} mx="auto" mt={5}>
        <VStack spacing={5}>
          <Prompt label={'Side Length #1'} valueRef={firstLength} />
          <Prompt label={'Side Length #2'} valueRef={secondLength} />
          <Prompt label={'Side Length #3'} valueRef={thirdLength} />
          <Button
            colorScheme={'telegram'}
            onClick={() => {
              console.log(thirdLength.current);
            }}
          >
            Calculate Angles
          </Button>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
