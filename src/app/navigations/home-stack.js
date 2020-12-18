import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import "react-native-gesture-handler";
import HomeView from "../pages/home";

const Stack = createStackNavigator();

export default class HomeStackNagivator extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={() => {
            return {
              headerShown: false,
            };
          }}
        />
      </Stack.Navigator>
    );
  }
}
