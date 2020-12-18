import { Text as T } from "react-native";
import styled from "styled-components";
import {
  color,
  compose,
  shadow,
  size,
  space,
  layout,
  typography,
} from "styled-system";
import theme from "../../theme/theme";

const Text = styled(T)(compose(typography, layout, space, color, shadow, size));

Text.defaultProps = {
  fontFamily: theme.fonts.medium,
};

export default Text;
