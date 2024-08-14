import React, { useState } from "react";
import { Box, Input } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import "./search.css";
const Search = () => {
  const [value, setValue] = useState("");
  return (
    <Box className="container">
      <Input
        placeholder="¿Qué estás buscando?"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
      />
      {value ? <IoIosClose onClick={() => setValue("")} /> : <CiSearch />}
    </Box>
  );
};

export default Search;
