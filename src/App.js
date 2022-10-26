import React, { useState, useRef } from 'react';
import { ChakraProvider, theme, Box, VStack, Button } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import { Prompt } from './components/Prompt';
import { LengthValidator } from './components/LengthValidator';

function App() {
  // probably not ideal
  const [firstLength, setFirstLength] = useState(0);
  const [secondLength, setSecondLength] = useState(0);
  const [thirdLength, setThirdLength] = useState(0);

  const valid = useRef(false);

  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Box textAlign="center" fontSize="xl" w={'80vw'} mx="auto" mt={5}>
        <VStack spacing={5}>
          <Prompt label={'Side Length #1'} valueRef={setFirstLength} />
          <Prompt label={'Side Length #2'} valueRef={setSecondLength} />
          <Prompt label={'Side Length #3'} valueRef={setThirdLength} />
          <LengthValidator
            firstLength={firstLength}
            secondLength={secondLength}
            thirdLength={thirdLength}
            validRef={valid}
          />
          <Button
            colorScheme={'telegram'}
            onClick={() => {}}
            disabled={!valid.current}
          >
            Calculate Angles
          </Button>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
