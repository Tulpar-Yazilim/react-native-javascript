import { TouchableOpacity } from "react-native";
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

const Button = styled(TouchableOpacity)(
  compose(flexbox, space, border, color, size, borderRadius)
);

Button.defaultProps = {
  activeOpacity: 1,
};

export default Button;
