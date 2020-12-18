import * as React from "react";
import { ImageBackground } from "react-native";
import Box from "./box";

function Bg({ children, ...props }) {
  return (
    <Box
      as={ImageBackground}
      source={require("../../assets/bg.png")}
      alignItems="center"
      bg="lightGray"
      {...props}
    >
      {children}
    </Box>
  );
}

export default Bg;
