import React from "react";
import {
  Button,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

const Counter = () => {
  return (
    <>
      <NumberInput size="sm" defaultValue={1} maxW={16} min={1} marginRight={5}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Button size="sm" borderRadius="md" maxW="8rem" fontSize="xs">
        Agregar a carrito
      </Button>
    </>
  );
};

export default Counter;
