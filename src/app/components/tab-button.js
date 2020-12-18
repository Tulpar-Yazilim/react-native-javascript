import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import {
  borderRadius,
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  size,
  space,
} from "styled-system";

const TabButton = styled(TouchableOpacity)(
  compose(position, flexbox, space, color, size, layout, border, borderRadius)
);

TabButton.defaultProps = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};

export default TabButton;
