import React, { useContext } from "react";
import {
  View,
  Image,
  StyleSheet,
  Platform,
  ImageProps,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { Chevron } from ".";
import { Theme } from "./SettingsScreen";

const fontFamily = Platform.OS === "ios" ? "Avenir" : "sans-serif";
export type UserInfoProps = {
  source: ImageProps["source"];
  title: string;
  subTitle: string;
  showDisclosureIndicator?: boolean;
  onPress?: TouchableOpacity['props']['onPress'];
};
export const UserInfo: React.FC<UserInfoProps> = ({
  source,
  title,
  subTitle,
  showDisclosureIndicator = false,
  onPress,
}) => {
  // const { source, title, subTitle} = props;
  const {viewStyle, textStyle} = useContext(Theme);
  return (
    <UserContainer style={viewStyle} onPress={onPress}>
      <Image source={source} style={styles.userImage} />
      <View style={{flex: 1}}>
        <UserTitle style={textStyle} children={title} />
        <UserSubTitle style={textStyle} children={subTitle} />
      </View>
      {showDisclosureIndicator && <Chevron/>}
    </UserContainer>
  );
};
const UserContainer = styled.TouchableOpacity`
  margin-top: 40;
  margin-bottom: 50;
  padding-vertical: 20;
  justify-content: center;
  align-items: center;
  border-top-width: ${StyleSheet.hairlineWidth};
  border-bottom-width: ${StyleSheet.hairlineWidth};
  border-color: #767676;
  flex-direction: row;
`;
const UserTitle = styled.Text`
  font-family: ${fontFamily};
  font-size: 24;
`;
const UserSubTitle = styled.Text`
  font-family: ${fontFamily};
  color: #999;
  font-size: 14;
`;
const styles = StyleSheet.create({
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "black",
    marginHorizontal: 20,
  },
});
