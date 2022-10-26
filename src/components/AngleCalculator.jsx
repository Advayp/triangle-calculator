import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { compareNumbers, isValid } from '../utils';

export const AngleCalculator = ({ firstLength, secondLength, thirdLength }) => {
  const arrayFormatted = [firstLength, secondLength, thirdLength].sort(
    compareNumbers
  );

  const { value } = isValid(arrayFormatted);

  const calculateAngle = (a, b, c) => {
    return (
      Math.round(
        100 * (180 / Math.PI) * Math.acos((a * a + b * b - c * c) / (2 * a * b))
      ) / 100.0
    );
  };

  return (
    <>
      {value && (
        <TableContainer>
          <Table variant="simple">
            <TableCaption>
              Calculated Angles using the Law of Cosines
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Opposite Side</Th>
                <Th>Angle</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{thirdLength}</Td>
                <Td>
                  {calculateAngle(firstLength, secondLength, thirdLength)}
                </Td>
              </Tr>
              <Tr>
                <Td>{secondLength}</Td>
                <Td>
                  {calculateAngle(thirdLength, firstLength, secondLength)}
                </Td>
              </Tr>
              <Tr>
                <Td>{firstLength}</Td>
                <Td>
                  {calculateAngle(thirdLength, secondLength, firstLength)}
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};
