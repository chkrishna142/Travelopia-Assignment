import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { storeFormData } from "../redux/action";
import axios from "axios";
import Formtable from "./Formtable";
import TableWithPagination from "./Tablewithpagination";

function Dashboard() {
  let dispatch = useDispatch();
  const { colorMode, toggleColorMode } = useColorMode();
  let formsData = useSelector((state) => state.Insert.forms);
  let { loading, loaded } = useSelector((state) => state.Insert);
  // console.log(formsData);
  // console.log(loading);
  const itemsPerPage = 5;
  useEffect(() => {
    dispatch(storeFormData());
  }, []);

  return (
    <div>
      <TableWithPagination data={formsData} itemsPerPage={itemsPerPage} />
    </div>
  );
}

export default Dashboard;
