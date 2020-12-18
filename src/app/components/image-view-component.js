import React from "react";
import { Icon } from "react-native-elements";
import ImageView from "react-native-image-viewing";
import Box from "./box";
import BoxCenter from "./box-center";
import Text from "./text";

export default function TulparImageView({
  images,
  isVisible,
  onRequestClose,
  ...props
}) {
  return (
    <ImageView
      images={images}
      imageIndex={0}
      visible={isVisible}
      FooterComponent={({ imageIndex }) => (
        <Box flexDirection="row" pb={30}>
          <BoxCenter>
            <Icon
              type="ionicon"
              color={imageIndex > 0 ? "white" : ""}
              name="arrow-back-outline"
              size={30}
            />
          </BoxCenter>
          <BoxCenter>
            <Text color="white">{`${imageIndex + 1} / ${images.length}`}</Text>
          </BoxCenter>
          <BoxCenter>
            <Icon
              type="ionicon"
              color={imageIndex + 1 < images.length ? "white" : ""}
              name="arrow-forward-outline"
              size={30}
            />
          </BoxCenter>
        </Box>
      )}
      onRequestClose={onRequestClose}
      {...props}
    />
  );
}
