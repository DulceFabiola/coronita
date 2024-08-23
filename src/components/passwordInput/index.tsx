import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import React, { FC } from "react";

type Props = {
  confirmPassword?: boolean;
};
const PasswordInput: FC<Props> = ({ confirmPassword }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClick = () => setShowPassword(!showPassword);
  return (
    <>
      <FormControl isRequired>
        <FormLabel className="verticalMargin">Contraseña</FormLabel>
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
      </FormControl>
      {confirmPassword && (
        <FormControl isRequired>
          <FormLabel className="verticalMargin">Confirmar contraseña</FormLabel>
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
        </FormControl>
      )}
    </>
  );
};

export default PasswordInput;
