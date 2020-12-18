import React from "react";
import { Button } from "react-native-elements";
import theme from "../../theme/theme";

const ButtonComponent = (props) => {
  return (
    <Button
      icon={props.icon}
      title={props.title}
      titleStyle={{
        color: props.color,
        fontFamily: props.fontFamily ? props.fontFamily : theme.fonts.medium,
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        height: props.tsHeight,
      }}
      buttonStyle={{
        width: props.width,
        height: props.height,
        marginLeft: props.ml,
        marginRight: props.mr,
        marginTop: props.mt,
        backgroundColor: props.bg,
        borderRadius: props.borderRadius ? props.borderRadius : 10,
      }}
      loading={props.loading}
      onPress={props.onPress}
    />
  );
};

export default ButtonComponent;
