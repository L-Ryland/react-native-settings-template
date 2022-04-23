import React from "react";
import {View, StyleSheet} from "react-native"
// import Entypo from 'react-native-vector-icons/Entypo';
import { Entypo } from "@expo/vector-icons";

export const Chevron = ():JSX.Element => {
  return (
    <View style={defaultStyles.chevron}>
      <Entypo name="chevron-right" size={24} color="black" />
    </View>
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
