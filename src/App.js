import React, { useState } from 'react';
import { ChakraProvider, theme, Box, VStack, Divider } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import { Prompt } from './components/Prompt';
import { LengthValidator } from './components/LengthValidator';
import { AngleCalculator } from './components/AngleCalculator';

function App() {
  // probably not ideal
  const [firstLength, setFirstLength] = useState(0);
  const [secondLength, setSecondLength] = useState(0);
  const [thirdLength, setThirdLength] = useState(0);

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
          />
          <Divider orientation="horizontal" maxW={'40vw'} />
          <AngleCalculator
            firstLength={firstLength}
            secondLength={secondLength}
            thirdLength={thirdLength}
          />
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
