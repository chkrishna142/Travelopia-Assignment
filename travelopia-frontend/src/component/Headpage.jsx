import { useColorMode, Button } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import React from "react";
function Headpage() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className="headOfPage">
      <h1 className="welcome">Welcome to Travelopia</h1>
      <div>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </div>
    </div>
  );
}

export default Headpage;
