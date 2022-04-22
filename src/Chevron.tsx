import * as React from "react";
import { Image, StyleSheet } from "react-native";

export const Chevron = (): JSX.Element => {
  return (
    <Image
      source={require("./assets/chevron3.png")}
      style={defaultStyles.chevron}
    />
  );
};

const defaultStyles = StyleSheet.create({
  chevron: {
    width: 12,
    height: 12,
    marginLeft: 8,
    marginRight: 10,
    opacity: 0.35,
  },
});
