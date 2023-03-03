import { CSSProperties } from "react";
import styled from "styled-components";

type FlexProps = {
  justifyContent?: CSSProperties["justifyContent"];
  flexDirection?: CSSProperties["flexDirection"];
  alignItems?: CSSProperties["alignItems"];
  gap?: CSSProperties["gap"];
  gutterBottom?: boolean;
};

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection ?? "row"};
  justify-content: ${(props) => props.justifyContent ?? "stretch"};
  align-items: ${(props) => props.alignItems ?? "stretch"};
  gap: ${(props) => (props.gap ? `${props.gap}px` : "0px")};
  margin: ${(props) => (props.gutterBottom ? "10px 0" : 0)};
  flex-wrap: wrap;
`;

export default Flex;
