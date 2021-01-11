import * as React from "react";
import { Image, Linking, ScrollView } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import Box from "../components/box";
import BoxCenter from "../components/box-center";
import Text from "../components/text";
import TouchableButton from "../components/touchable-button";

export default class AboutView extends React.Component {
  openGithub = async () => {
    await Linking.openURL(
      "https://github.com/tulparyazilim/tulpar-base-reactnative"
    );
  };

  openMail = async () => {
    await Linking.openURL("mailto:info@tulparyazilim.com.tr");
  };

  openLinkedIn = async () => {
    await Linking.openURL("https://www.linkedin.com/company/17907958");
  };

  render() {
    return (
      <Box as={SafeAreaView} flex={1}>
        <ScrollView flex={1} width="100%">
          <Box pb={100}>
            <Box pt={20} pb={30}>
              <BoxCenter>
                <Text fontSize={22} fontWeight="bold">
                  ABOUT PAGE
                </Text>
              </BoxCenter>

              <BoxCenter pt={20}>
                <Box
                  as={Image}
                  resizeMode="contain"
                  style={{
                    width: 200,
                    height: 50,
                  }}
                  source={{
                    uri: "https://www.tulparyazilim.com.tr/img/logo.png",
                  }}
                />
              </BoxCenter>
            </Box>

            <Box>
              <BoxCenter>
                <Text fontSize={16} fontWeight="bold">
                  Tulpar Base React Native Project
                </Text>
              </BoxCenter>

              <Box pt={30}>
                <BoxCenter>
                  <Text>You can get more info from Github at</Text>
                </BoxCenter>

                <Box pt={15}>
                  <TouchableButton onPressIn={() => this.openGithub()}>
                    <Text>
                      https://github.com/tulparyazilim/tulpar-base-reactnative
                    </Text>
                  </TouchableButton>
                </Box>
              </Box>

              <Box pt={30}>
                <BoxCenter>
                  <Text fontSize={16} fontWeight="bold">
                    ⭐️ Base Features
                  </Text>
                </BoxCenter>

                <Box pt={15}>
                  <Text pl={15}>⭐️ styled-components and styled-system</Text>
                  <Text pl={15}>⭐️ react-tracked</Text>
                  <Text pl={15}>⭐️ react-native-svg</Text>
                  <Text pl={15}>⭐️ react-native-toast-message</Text>
                  <Text pl={15}>⭐️ react-native-elements</Text>
                  <Text pl={15}>⭐️ react-native-onesignal</Text>
                  <Text pl={15}>⭐️ react-native-crypto-js</Text>
                  <Text pl={15}>
                    ⭐️ @react-native-async-storage/async-storage
                  </Text>
                  <Text pl={15}>
                    ⭐️ @react-navigation/bottom-tabs and
                    @react-navigation/drawer
                  </Text>
                  <Text pl={15}>⭐️ react-native-inappbrowser-reborn</Text>
                  <Text pl={15}>⭐️ react-native-modalbox</Text>
                </Box>
              </Box>

              <Box pt={30}>
                <BoxCenter>
                  <Text fontSize={16} fontWeight="bold">
                    ⚡ Npm Commands
                  </Text>
                </BoxCenter>

                <Box pt={15}>
                  <Text pl={15}>⚡ npm run svgr</Text>
                  <Text pl={15}>⚡ npm run android</Text>
                  <Text pl={15}>⚡ npm run android-release</Text>
                  <Text pl={15}>⚡ npm run ios</Text>
                  <Text pl={15}>⚡ npm run icon</Text>
                  <Text pl={15}>⚡ npm run splash</Text>
                  <Text pl={15}>⚡ npm run clean:android | clean:ios</Text>
                  <Text pl={15}>⚡ npm run pod</Text>
                  <Text pl={15}>⚡ npm run release-apk:android</Text>
                  <Text pl={15}>⚡ npm run release-aab:android</Text>
                </Box>
              </Box>

              <Box pt={30}>
                <BoxCenter>
                  <Text fontSize={16} fontWeight="bold">
                    📫 Contact Us
                  </Text>
                </BoxCenter>

                <Box pt={15}>
                  <Text pl={15}>
                    <TouchableButton onPressIn={() => this.openMail()}>
                      <BoxCenter>
                        <Text>info@tulparyazilim.com.tr</Text>
                      </BoxCenter>
                    </TouchableButton>
                  </Text>

                  <Text pl={15}>
                    <TouchableButton onPressIn={() => this.openLinkedIn()}>
                      <BoxCenter>
                        <Text>https://www.linkedin.com/company/17907958</Text>
                      </BoxCenter>
                    </TouchableButton>
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        </ScrollView>
      </Box>
    );
  }
}
