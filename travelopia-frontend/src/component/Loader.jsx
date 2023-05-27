import React from "react";
import { useSelector } from "react-redux";
import { Spinner, Image } from "@chakra-ui/react";

function Loader() {
  // let { loading, loaded } = useSelector((state) => state.Insert);
  // console.log(loading, loaded);

  return (
    <div
      style={{
        backgroundColor: "black",
        background: "transparent",
      }}
    >
      <Image
        w={"500px"}
        background={"transparent"}
        m={"auto"}
        my={"20px"}
        src=" https://i.pinimg.com/originals/09/ad/45/09ad45597622f071006ca30bbaf506bb.gif"
        alt="loading image"
        borderRadius={"15px"}
      />
    </div>
  );
}

export default Loader;
