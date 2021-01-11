import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import "react-native-gesture-handler";
import AboutPage from "../pages/about";
import HomeStackNagivator from "./home-stack";
import TabBar from "./tab-bar";

const Tab = createBottomTabNavigator();

export default class TabNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBar={(props) => <TabBar {...props} />}
        >
          <Tab.Screen name="Home" component={HomeStackNagivator} />
          <Tab.Screen name="About" component={AboutPage} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
