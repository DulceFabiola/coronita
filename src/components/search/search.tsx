import React from "react";
import { Box, Input } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import "./search.css";
const Search = () => {
  return (
    <Box className="container">
      <Input placeholder="¿Qué estás buscando?" />
      <CiSearch />
    </Box>
  );
};

export default Search;
