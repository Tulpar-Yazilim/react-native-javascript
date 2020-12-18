import { Input } from "react-native-elements";
import styled from "styled-components";
import {
  flexbox,
  border,
  borderRadius,
  color,
  compose,
  size,
  space,
} from "styled-system";

const InputComponets = styled(Input)(
  compose(flexbox, space, border, color, size, borderRadius)
);
export default InputComponets;
