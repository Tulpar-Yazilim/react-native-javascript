import React from "react";
import { Avatar } from "react-native-elements";
import theme from "../../theme/theme";

export default function ProfilePhoto({ size, borderColor, icon, ...props }) {
  return (
    <Avatar
      size={size ? size : "xlarge"}
      rounded
      avatarStyle={{
        borderWidth: 5,
        borderColor: borderColor ? borderColor : theme.colors.mainColor,
      }}
      {...props}
    >
      {icon}
    </Avatar>
  );
}
