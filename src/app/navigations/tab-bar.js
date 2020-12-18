import React from "react";
import { Keyboard } from "react-native";
import Box from "../components/box";
import Button from "../components/tab-button";

export default function TabBar({ state, descriptors, navigation }) {
  const [showTab, setShowTab] = React.useState(true);

  React.useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setShowTab(false);
  };

  const _keyboardDidHide = () => {
    setShowTab(true);
  };

  return (
    <>
      {showTab && (
        <Box
          height={55}
          bg="white"
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
          px={20}
          borderTopLeftRadius={30}
          borderTopRightRadius={30}
          flexDirection="row"
        >
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];

            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            return (
              <Button
                height={55}
                key={label}
                flexDirection="column"
                flex={1}
                onPress={onPress}
              >
                {/* {label === "Home" && (
                  <Home
                    width={24}
                    height={24}
                    color={isFocused ? theme.colors.mainColor : theme.colors.textDark}
                  />
                )}
                {label === "Campaign" && (
                  <Search
                    width={24}
                    height={24}
                    color={isFocused ? theme.colors.yellow : theme.colors.black}
                  />
                )}
                {label === "CityGuide" && (
                  <Book
                    width={24}
                    height={24}
                    color={isFocused ? theme.colors.yellow : theme.colors.black}
                  />
                )}
                {label === "Profile" && (
                  <User
                    width={24}
                    height={24}
                    color={isFocused ? theme.colors.yellow : theme.colors.black}
                  />
                )} */}
              </Button>
            );
          })}
        </Box>
      )}
    </>
  );
}
