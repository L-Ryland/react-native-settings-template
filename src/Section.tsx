import { Row, RowProps } from ".";

import React from "react";
import styled from "styled-components/native";
import type { TextStyle, ViewStyle } from "react-native";
// import Row_1 from "./Row";

type SectionDataProps = {
  header?: string;
  rows: RowProps[];
  footer?: string | Function;
};

export function createSectionFactory(sectionData?: SectionDataProps) {
  if (sectionData) {
    const { header, footer, rows } = sectionData;
    const children = [
      header && <SectionHeader key={header} children={header} />,
      rows &&
        rows.map((row: RowProps, index: number) => (
          <Row
            key={index}
            isFirst={index == 0 ? true : false}
            isLast={index == rows.length - 1 ? true : false}
            {...row}
          />
        )),
      // typeof footer == 'string' && SectionFooter({children: footer}),
      typeof footer == "string" && (
        <SectionFooter key={footer} children={footer} />
      ),
      typeof footer == "function" && (
        <RenderedSectionFooterContainer key="footer" children={footer()} />
      ),
    ];
    return {
      Section: () => <Section children={children} />,
      SectionHeader,
      Row,
      SectionFooter,
    };
  }
  return { Section, SectionHeader, Row, SectionFooter };
}
type SectionProps = {
  children?: any,
  viewStyle?: ViewStyle,
  textStyle?: TextStyle
}
function Section(props: SectionProps) {
  return <SectionContainer {...props} />;
}

const SectionContainer = styled.View`
  align-items: stretch;
  margin-bottom: 40;
`;
const SectionHeader = styled.Text`
  margin-left: 15;
  margin-bottom: 8;
  color: #999;
  font-size: 14;
`;
const SectionFooter = styled.Text`
  margin-top: 8;
  font-size: 15;
  color: #999;
  margin-horizontal: 15;
`;
const RenderedSectionFooterContainer = styled.View`
  align-self: stretch;
`;
