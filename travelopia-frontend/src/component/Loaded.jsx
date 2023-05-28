import React from "react";
import { Heading, Image, Text, Box, useColorMode } from "@chakra-ui/react";
import { useSelector } from "react-redux";

function Loaded() {
  const { colorMode, toggleColorMode } = useColorMode();
  const order = useSelector((state) => state.Insert.order);
  return (
    <div className="loadedComponent">
      <Box
        style={{
          backgroundColor: colorMode === "light" ? "#F5D14E" : "black",
          width: "600px",
          margin: "auto",
          marginTop: "10px",
          borderRadius: "15px",
          height: "95px",
        }}
      >
        <Heading>Your Form submitted</Heading>
        <Text fontSize="lg">
          Your submission has been made with ID - {order}{" "}
        </Text>
      </Box>

      <Image
        w={"500px"}
        background={"transparent"}
        m={"auto"}
        my={"20px"}
        src=" https://i.pinimg.com/originals/43/3b/6c/433b6c5336c72a21bcfd9db8d831562a.gif"
        alt="loading image"
        borderRadius={"15px"}
      />
    </div>
  );
}

export default Loaded;
