import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import React from "react";

const PasswordInput = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClick = () => setShowPassword(!showPassword);
  return (
    <InputGroup size="md" m="15px 0px">
      <Input
        pr="4.5rem"
        type={showPassword ? "text" : "password"}
        placeholder="Ingresa contraseña"
      />
      <InputRightElement width="4.5rem">
        <Button
          fontSize="xs"
          maxW="3rem"
          h="1.75rem"
          size="xs"
          onClick={handleClick}
        >
          {showPassword && (
            <FiEye onClick={() => setShowPassword(!showPassword)} />
          )}
          {!showPassword && (
            <FiEyeOff onClick={() => setShowPassword(!showPassword)} />
          )}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default PasswordInput;
