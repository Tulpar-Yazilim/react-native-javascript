import React from "react";
import { FlatList as F } from "react-native";
import styled from "styled-components";
import {
  border,
  borderRadius,
  color,
  compose,
  flexbox,
  position,
  size,
  space,
} from "styled-system";

const FlatList = styled(F)(
  compose(flexbox, position, space, border, color, size, borderRadius)
);

export default function TulparFlatList({ data, renderItem, ...props }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.Id}
      renderItem={renderItem}
      {...props}
    />
  );
}
