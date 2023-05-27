import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  FormHelperText,
  FormErrorMessage,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Button,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { sendData } from "../redux/action";
import { useNavigate } from "react-router-dom";

function Formtoinput() {
  const [value, setValue] = React.useState(0);
  const handleChange = (value) => {
    setValue(value);
    setTravellers(value);
  };

  const { colorMode, toggleColorMode } = useColorMode();
  const [name, setName] = useState("");
  const [emailid, setEmail] = useState("");
  const [place, setPlace] = useState("");
  const [travellers, setTravellers] = useState(2);
  const [budget, setBudget] = useState(2000);
  const total = budget * travellers;

  let { loading, loaded } = useSelector((state) => state.Insert);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const changetravellers = (v) => {
    if (travellers !== 1) setTravellers(travellers + v);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formInputs = {
      name: name,
      emailid: emailid,
      place: place,
      travellers: travellers,
      budget: budget,
      total: total,
    };

    dispatch(sendData(formInputs)).then((res) => {
      if (loading) {
        navigate("/loader");
      } else {
        navigate("/loaded");
      }
    });
  };
  return (
    <div
      className="formtable"
      style={{
        backgroundColor: colorMode === "light" ? "#F0FFFF" : "#282828",
      }}
    >
      <form onSubmit={handleSubmit}>
        <FormControl className="tablecontent">
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              required
              variant="filled"
              className="nameinput"
              placeholder="Enter name"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel mt={"5px"}>E-mail Address</FormLabel>
            <Input
              className="nameinput"
              variant="filled"
              placeholder="Enter E-mail"
              value={emailid}
              name="emailid"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormHelperText>We'll never share your email.</FormHelperText>
          <FormControl isRequired>
            <FormLabel mt={"5px"}>Your Destination</FormLabel>
            <Select
              placeholder="Select country"
              value={place}
              name="place"
              onChange={(e) => setPlace(e.target.value)}
            >
              <option>India</option>
              <option>Africa</option>
              <option>Europe</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel mt={"5px"}>Number Of Travellers</FormLabel>

            <NumberInput defaultValue={travellers} min={1}>
              <NumberInputField
                variant="filled"
                value={travellers}
                // name="travellers"
                onChange={(e) => setTravellers(e.target.value)}
              />
              <NumberInputStepper>
                <NumberIncrementStepper onClick={() => changetravellers(+1)} />
                <NumberDecrementStepper onClick={() => changetravellers(-1)} />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl isRequired>
            <FormLabel mt={"5px"}>Budget per Head</FormLabel>
            <Input
              type="number"
              className="nameinput"
              variant="filled"
              placeholder="$"
              value={budget}
              name="budget"
              onChange={(e) => setBudget(e.target.value)}
            />
          </FormControl>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "4px",
              marginTop: "10px",
            }}
          >
            <Text fontSize="md">Net Budget: $ {total}</Text>
            <Button type="submit" colorScheme="cyan">
              SUBMIT
            </Button>
          </Box>
        </FormControl>
      </form>
    </div>
  );
}

export default Formtoinput;
