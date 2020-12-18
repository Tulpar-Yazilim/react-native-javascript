import { View } from "react-native";
import styled from "styled-components";
import {
  border,
  borderRadius,
  color,
  compose,
  flexbox,
  size,
  space,
} from "styled-system";

const Box = styled(View)(
  compose(flexbox, space, border, color, size, borderRadius)
);

export default Box;
