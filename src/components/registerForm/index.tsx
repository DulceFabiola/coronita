import React, { ChangeEvent, useState } from "react";
import {
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  FormErrorMessage,
  FormHelperText,
  InputGroup,
  Text,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import { FiPhoneIncoming } from "react-icons/fi";
import PasswordInput from "../passwordInput";
import "./index.css";

const RegisterForm = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const isError = input === "";
  return (
    <Container className="register-container">
      <Heading size="sm" className="verticalMargin">
        Registro Depósito Coronita
      </Heading>
      <Text size="xs" className="verticalMargin">
        Datos personales
      </Text>
      <FormControl isRequired>
        <FormLabel className="verticalMargin">Nombre (s)</FormLabel>
        <Input placeholder="ej. Juan" />
      </FormControl>

      <FormControl isRequired>
        <FormLabel className="verticalMargin">Apellido</FormLabel>
        <Input placeholder="ej. Peréz" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel className="verticalMargin">
          Nombre del establecimiento
        </FormLabel>
        <Input placeholder="ej. Abarrotes Pochutla" />
      </FormControl>

      <FormControl isRequired isInvalid={isError}>
        <FormLabel className="verticalMargin">Correo electrónico</FormLabel>
        <Input type="email" value={input} onChange={handleInputChange} />
        {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>El Correo es requerido.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isRequired>
        <FormLabel className="verticalMargin">Número telefónico</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FiPhoneIncoming color="gray.300" />
          </InputLeftElement>
          <Input type="tel" placeholder="Número telefónico" />
        </InputGroup>
      </FormControl>
      <PasswordInput confirmPassword />
      <Button className="verticalMargin" maxW={{ base: "50%", sm: "40%" }}>
        Continuar
      </Button>
    </Container>
  );
};

export default RegisterForm;
