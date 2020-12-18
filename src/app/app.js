import * as React from "react";
import { StatusBar } from "react-native";
import "react-native-gesture-handler";
import OneSignal from "react-native-onesignal";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import { ThemeProvider } from "styled-components";
import { GlobalStateProvider } from "../base/utils/context";
import theme from "../theme/theme";
import TabNavigator from "./navigations/bottom-tab";

export default function App() {
  const initOnesignal = () => {
    try {
      OneSignal.setLocationShared(true);
      OneSignal.init(BaseConfig.ONESIGNAL_APP_ID, {
        kOSSettingsKeyAutoPrompt: true,
      });
      OneSignal.inFocusDisplaying(2);
      OneSignal.getPermissionSubscriptionState((response) => {
        let isSubscribed = response["subscriptionEnabled"];
        OneSignal.setSubscription(isSubscribed);
      });
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    StatusBar.setBackgroundColor(theme.colors.mainColor);
    StatusBar.setBarStyle("dark-content");
    initOnesignal();
  }, []);

  return (
    <>
      <GlobalStateProvider>
        <ThemeProvider theme={theme}>
          <SafeAreaProvider>
            <TabNavigator />
          </SafeAreaProvider>
        </ThemeProvider>
      </GlobalStateProvider>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
}
