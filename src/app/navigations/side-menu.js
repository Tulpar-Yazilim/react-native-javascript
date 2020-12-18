import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import "react-native-gesture-handler";
import DrawerContent from "./drawer-content";
import TabNavigator from "./bottom-tab";

const Sidemenu = createDrawerNavigator();

export default class SidemenuNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Sidemenu.Navigator
          initialRouteName="Home"
          drawerType="slide"
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Sidemenu.Screen name="Home" component={TabNavigator} />
        </Sidemenu.Navigator>
      </NavigationContainer>
    );
  }
}
