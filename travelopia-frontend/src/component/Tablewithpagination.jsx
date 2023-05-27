import React, { useState } from "react";
import Pagination from "./Pagination";
import axios from "axios";
import Formtable from "./Formtable";
import DownloadExcel from "./Download";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useColorMode,
} from "@chakra-ui/react";

function TableWithPagination({ data, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const { colorMode, toggleColorMode } = useColorMode();
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const pageItems = getPageItems();
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div>
      <div className="downbtn">
        <DownloadExcel data={pageItems} />
      </div>
      <div
        className="tablebody"
        style={{
          background: colorMode === "light" ? "white" : "black",
          justifyContent: "center",
        }}
      >
        <TableContainer w={["350px", "700px"]}>
          <Table variant="striped" colorScheme="teal">
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>E-mail</Th>
                <Th>Destination</Th>
                <Th>Travellers</Th>
                <Th>Budget</Th>
              </Tr>
            </Thead>
            <Tbody>
              {pageItems.map((ele, i) => {
                return (
                  <Tr textAlign={"center"}>
                    <Td>{ele.name}</Td>
                    <Td>{ele.emailid}</Td>
                    <Td>{ele.place}</Td>
                    <Td>{ele.travellers}</Td>
                    <Td>{ele.budget}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
      {/* Render pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default TableWithPagination;
