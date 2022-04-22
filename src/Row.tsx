import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
} from "react-native";
import styled from "styled-components/native";
import { Chevron } from ".";
import { Theme } from "./SettingsScreen";

 export type RowProps = {
  title: string;
  subtitle?: string;
  onPress?: TouchableOpacityProps["onPress"];
  showDisclosureIndicator?: boolean;
  renderAccessory?: () => JSX.Element;
  viewStyle?: ViewStyle;
  titleStyles?: TextStyle;
  subtitleStyles?: TextStyle;
  isFirst?: boolean;
  isLast?: boolean;
  height?: ViewStyle["height"];
};
export const Row = ({
  title,
  subtitle,
  onPress,
  showDisclosureIndicator = false,
  renderAccessory,
  titleStyles,
  subtitleStyles,
  isFirst,
  isLast,
  height,
}: RowProps) => {
  const {viewStyle, textStyle} = useContext(Theme)
  return (
    <Container height={height ? height : subtitle ? 56 : 46}>
        <TopBorderContainer isFirst={isFirst??true}>
          <TopBorder />
        </TopBorderContainer>
      <ContentContainer onPress={onPress} style={viewStyle}>
        <TitlesContainer>
          <Title numberOfLines={1} style={[textStyle, titleStyles]}>{title}</Title>
          {subtitle && <Subtitle numberOfLines={1} style={subtitleStyles}>{subtitle}</Subtitle>}
        </TitlesContainer>
        {renderAccessory && renderAccessory()}
        {showDisclosureIndicator ? <Chevron /> : <View style={{ width: 10 }} />}
      </ContentContainer>
      {isLast && <BottomBorder />}
    </Container>
  );
};

const Container = styled.View`
  background-color: transparent;
  height: ${({height}: { height: ViewStyle['height']}) => height};
  align-items: stretch;
`;
const ContentContainer = styled.TouchableOpacity`
  flex-direction: row;
  padding-left: 15;
  flex: 1;
  align-items: center;
`;
const TopBorderContainer = styled.View`
  align-self: stretch;
  height: ${StyleSheet.hairlineWidth};
  padding-left: ${({isFirst}: { isFirst: boolean }) => (isFirst ? 0 : 15)};
`;
const TopBorder = styled.View`
  flex: 1;
  background-color: #ccc;
`;
const TitlesContainer = styled.View`
  flex: 1;
  justify-content: space-around;
  align-self: stretch;
`;
const Title = styled.Text`
  color: black;
  font-size: 18;
  margin-right: 15;
`;
const Subtitle = styled.Text`
  color: #999;
  font-size: 15;
  margin-right: 15;
`;
const BottomBorder = styled.View`
  align-self: stretch;
  height: ${StyleSheet.hairlineWidth};
  background-color: #ccc;
`;
