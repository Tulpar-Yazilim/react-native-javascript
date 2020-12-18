import React from "react";
import { Icon } from "react-native-elements";
import theme from "../../theme/theme";
import Box from "./box";
import Input from "./input";

export default function SearchBox({ reference, ...props }) {
  return (
    <Box flexDirection="row" alignItems="center">
      <Box position="relative" flex={1}>
        <Input
          ref={reference}
          inputContainerStyle={{
            paddingHorizontal: 22,
            backgroundColor: "white",
            height: props.height ? props.height : 50,
            width: props.width ? props.width : "100%",
            borderRadius: props.borderRadius
              ? props.borderRadius
              : theme.radii.light,
            borderColor: props.borderColor ? props.borderColor : "white",
          }}
          inputStyle={{
            fontSize: 16,
            fontFamily: theme.fonts.regular,
            color: props.color ? props.color : theme.colors.black,
          }}
          placeholder={props.placeholder}
          placeholderTextColor={theme.colors.gray}
          rightIcon={
            props.IsSearched ? (
              props.IsSearchedButton
            ) : (
              <Icon
                type="ionicon"
                name="search"
                size={18}
                color={theme.colors.mainColor}
              />
            )
          }
          {...props}
        />
      </Box>
    </Box>
  );
}
