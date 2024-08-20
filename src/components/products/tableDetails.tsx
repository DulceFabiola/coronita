import React from "react";
import { Table, Tbody, Tr, Td, TableContainer } from "@chakra-ui/react";

const TableDetails = () => {
  return (
    <TableContainer maxW="xs">
      <Table variant="striped" size="xs" mt={5}>
        <Tbody>
          <Tr>
            <Td>Línea</Td>
            <Td>Extra</Td>
          </Tr>
          <Tr>
            <Td>Formato de venta</Td>
            <Td>Pack</Td>
          </Tr>
          <Tr>
            <Td>Tipo de envase</Td>
            <Td>Botella</Td>
          </Tr>
          <Tr>
            <Td>Unidades por pack</Td>
            <Td>24</Td>
          </Tr>
          <Tr>
            <Td>Cantidad de packs</Td>
            <Td>1</Td>
          </Tr>
          <Tr>
            <Td>Volumen de la unidad</Td>
            <Td>355 ml</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableDetails;
