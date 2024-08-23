import React from "react";
import PasswordInput from "../../components/passwordInput";
import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
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
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={20}
        className="links-container"
      >
        <GridItem w="100%">
          <Link to="/recuperar-cuenta"> ¿Olvidaste tu contraseña?</Link>
        </GridItem>
        <GridItem w="100%">
          <Link to="/registro">¡Regístrate!</Link>
        </GridItem>
      </Grid>
      <Button maxW={{ base: "40%", sm: "30%" }} mt="20px">
        Continuar
      </Button>
    </Container>
  );
};

export default LoginPage;
