import React from "react";
import PasswordInput from "../../components/passwordInput";
import { Container, Heading, Input, Text } from "@chakra-ui/react";
import "./index.css";
const LoginPage = () => {
  return (
    <Container className="form-container" mt="5">
      <Heading size="md">Bienvenid@ a Depósito Coronita</Heading>
      <Text fontSize="md" m="20px 0px">
        Ingresa tu correo y contraseña
      </Text>
      <Input placeholder="correo@ejemplo.com" type="email" />
      <PasswordInput />
    </Container>
  );
};

export default LoginPage;
