import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import product from "../../images/corona-355ml.jpg";
import "./index.css";

const ProductCard = () => {
  return (
    <Container className="wrapper">
      <Card maxW="lg">
        <CardBody>
          <Image
            src={product}
            alt="Corona"
            borderRadius="lg"
            className="card-image"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Corona </Heading>
            <Text>355ml</Text>
            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Button variant="ghost" colorScheme="blue">
            Agregar a carrito
          </Button>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default ProductCard;
