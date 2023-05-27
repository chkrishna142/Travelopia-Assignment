import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";

function Formtoinput() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [name, setName] = useState("");
  const [emailid, setEmail] = useState("");
  const [place, setPlace] = useState("");
  const [travellers, setTravellers] = useState(2);
  const [budget, setBudget] = useState(2000);
  const total = budget * travellers;
  console.log(colorMode);
  return (
    <div
      className="formtable"
      style={{
        backgroundColor: colorMode === "light" ? "#F0FFFF" : "#282828",
      }}
    >
      <FormControl className="tablecontent">
        <FormLabel>Name</FormLabel>
        <Input
          required
          variant="filled"
          className="nameinput"
          placeholder="Enter name"
        />

        <FormLabel mt={"5px"}>E-mail Address</FormLabel>
        <Input
          className="nameinput"
          variant="filled"
          placeholder="Enter E-mail"
        />
        <FormHelperText>We'll never share your email.</FormHelperText>

        <FormLabel mt={"5px"}>Your Destination</FormLabel>
        <Select placeholder="Select country">
          <option>India</option>
          <option>Africa</option>
          <option>Europe</option>
        </Select>

        <FormLabel mt={"5px"}>Number Of Travellers</FormLabel>
        <NumberInput max={50} min={1}>
          <NumberInputField variant="filled" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <FormLabel mt={"5px"}>Budget per Head</FormLabel>
        <Input
          type="number"
          className="nameinput"
          variant="filled"
          placeholder="$"
        />
      </FormControl>
    </div>
  );
}

export default Formtoinput;
