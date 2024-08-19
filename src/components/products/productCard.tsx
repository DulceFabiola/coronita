import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import product from "../../images/corona-355ml.jpg";
import "./index.css";

const ProductCard = () => {
  return (
    <Card maxW="100%">
      <CardBody>
        <Image
          borderRadius="lg"
          src={product}
          alt="Corona"
          className="card-image"
        />
        <Stack spacing="1">
          <Heading size="md" className="tittle">
            Corona
          </Heading>
          <Text className="label">Descripcion</Text>
          <Text className="strike">$567</Text>
          <Text as="samp">$450</Text>
        </Stack>
      </CardBody>
      <CardFooter className="wrapper">
        <Button size="sm" borderRadius="md" minW="8rem" fontSize="xs">
          Agregar a carrito
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
