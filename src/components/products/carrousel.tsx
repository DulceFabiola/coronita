import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import product from "../../images/pack-corona.png";

const CarrouselCards = () => {
  return (
    <SimpleGrid
      width="100%"
      overflowX="hidden"
      templateColumns={{
        base: "repeat(2, 100%)",
        sm: "repeat(3, 1fr)",
        md: "repeat(4, 1fr)",
        xl: "repeat(5, 1fr)",
      }}
      gap={{ base: 1, sm: 2 }}
      mt={15}
    >
      <Card>
        <CardHeader>
          <Heading size="md">
            Cerveza Clara Corona Extra De 24 Botellas De 355ml c/u
          </Heading>
        </CardHeader>
        <Link to={"/producto/2"}>
          <CardBody>
            <Image
              borderRadius="lg"
              src={product}
              alt="Corona"
              className="card-image"
            />
            <Text className="strike">$567</Text>
            <Text fontSize="3xl">$450</Text>
          </CardBody>
        </Link>
        <CardFooter>
          <Button>Ver ahora</Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
};

export default CarrouselCards;
