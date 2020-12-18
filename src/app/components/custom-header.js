import { DrawerActions, useNavigation } from "@react-navigation/native";
import React from "react";
import { Image } from "react-native";
import { Header, Icon } from "react-native-elements";
import theme from "../../theme/theme";
import Box from "./box";
import Button from "./touchable-button";

export function CustomHeader({ children, ...props }) {
  const navigation = useNavigation();
  return (
    <Header
      backgroundColor="white"
      leftComponent={() => {
        return (
          <Button
            onPressIn={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <Icon
              size={30}
              style={{ paddingLeft: 15 }}
              color={theme.colors.yellow}
              name="menu"
            />
          </Button>
        );
      }}
      centerComponent={() => {
        return (
          <Box
            as={Image}
            ml={30}
            style={{
              width: 190,
              height: 45,
            }}
            resizeMode="center"
            source={require("../../assets/logo.png")}
          />
        );
      }}
    />
  );
}
