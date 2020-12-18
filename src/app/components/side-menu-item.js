import React from "react";
import theme from "../../theme/theme";
import Box from "./box";
import Text from "./text";
import Button from "./touchable-button";

export function SidemenuItem({ title, icon, ...props }) {
  return (
    <Box
      as={Button}
      bg="white"
      style={{ height: 50, width: "100%" }}
      flex={1}
      pl={25}
      borderTopWidth={1}
      borderTopColor={theme.colors.gray}
      flexDirection="row"
      alignItems="center"
      {...props}
    >
      {icon}
      <SidemenuTitle>{title}</SidemenuTitle>
    </Box>
  );
}

export function SidemenuTitle({ children }) {
  return (
    <Text pl={20} color="black" fontSize={16} fontFamily="light">
      {children}
    </Text>
  );
}
