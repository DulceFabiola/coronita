import React from "react";
import {
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
import TableDetails from "../../components/products/tableDetails";
import CarrouselCards from "../../components/products/carrousel";
import Counter from "../../components/counter";

const ProductDetailsPage = () => {
  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        className="wrapCard"
        maxW="100%"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "50%" }}
          src={product}
          alt="Corona"
        />
        <Stack>
          <CardBody maxH={"min"}>
            <Heading size="md"> Cerveza clara Corona 355 ml</Heading>
            <Text className="strike">$567</Text>
            <Text fontSize="3xl">$450</Text>
            <Heading size="sm" mt={5}>
              Descripción
            </Heading>
            <Text py="2">
              Corona es de origen 100% mexicano y es la cerveza más vendida en
              el mundo, ahora presente en más de 120 países. Tiene un
              característico color dorado con espuma blanca, acompañados por un
              sabor ligero y refrescante.
            </Text>
            <Heading size="sm" mt={5}>
              Características del producto
            </Heading>
            <TableDetails />
          </CardBody>
          <CardFooter>
            <Counter />
          </CardFooter>
        </Stack>
      </Card>
      <Heading size="md" mt={5}>
        Productos relacionados
      </Heading>
      <CarrouselCards />
    </>
  );
};

export default ProductDetailsPage;
