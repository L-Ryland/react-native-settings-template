import React from "react";
import type { TextStyle, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { UserInfo, CustomView, UserInfoProps } from ".";
import { createSectionFactory } from "./Section";

type SettingsDataFactory = {
  SettingsScreen: React.FC<SettingsScreenProps>;
  createSectionFactory?: typeof createSectionFactory,
  UserInfo?: React.FC<UserInfoProps>,
  CustomView?: React.FC<any>
}
export function createSettingsDataFactory(): SettingsDataFactory {
  return {
    SettingsScreen,
    createSectionFactory,
    UserInfo,
    CustomView,
  };
}
const initiatedTheme: { viewStyle: ViewStyle, textStyle: TextStyle } = {
  viewStyle: {
    backgroundColor: '#eee'
  }, textStyle: {
    color: '#000'
  }
}
export const Theme = React.createContext(initiatedTheme);
type SettingsScreenProps = {
  textStyle: TextStyle;
  viewStyle: ViewStyle;
  [key: string]: any
}
const SettingsScreen = ({ textStyle, viewStyle, ...otherProps }: SettingsScreenProps) => {
  console.log('[SettingsScreen Component] [otherProps]', otherProps);

  return (
    <Theme.Provider value={{ viewStyle, textStyle }}>
      <SettingsScrollView {...otherProps} />
    </Theme.Provider>
  );
};

const SettingsScrollView = styled.ScrollView`
  flex: 1;
  align-self: stretch;
`;
