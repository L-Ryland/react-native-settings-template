import React from "react";
import styled from "styled-components/native";
import { UserInfo, CustomView } from ".";
import { createSectionFactory } from "./Section";

export function createSettingsDataFactory<T>() {
  return {
    SettingsScreen,
    createSectionFactory,
    UserInfo,
    CustomView,
  };
}
export const Theme = React.createContext({viewStyle: {
  backgroundColor: '#eee'
}, textStyle: {
  color: '#000'
}});
const SettingsScreen = ({ textStyle, viewStyle, ...otherProps }) => {
  return (
    <Theme.Provider value={{ viewStyle, textStyle }}>
      <SettingsScrollView {...otherProps} />;
    </Theme.Provider>
  );
};

const SettingsScrollView = styled.ScrollView`
  flex: 1;
  align-self: stretch;
`;
