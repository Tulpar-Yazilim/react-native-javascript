import * as React from "react";
import SafeAreaView from "react-native-safe-area-view";
import Box from "../components/box";

export default class SearchView extends React.Component {
  render() {
    return (
      <Box as={SafeAreaView} bg="thirdColor" flex={1}>
        {/* content */}
        <Box flex={1} bg="thirdColor" pt={26}></Box>
      </Box>
    );
  }
}
