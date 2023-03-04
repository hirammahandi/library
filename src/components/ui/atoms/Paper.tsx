import styled from "styled-components";
import { CSSProperties } from "react";

type PaperProps = {
  width?: CSSProperties["width"];
  maxWidth?: CSSProperties["maxWidth"];
};

const Paper = styled.div<PaperProps>`
  width: ${(props) =>
    typeof props.width === "string"
      ? props.width
      : typeof props.width === "number"
      ? `${props.width}px`
      : "auto"};
  max-width: ${(props) =>
    typeof props.maxWidth === "string"
      ? props.maxWidth
      : typeof props.maxWidth === "number"
      ? `${props.maxWidth}px`
      : "auto"};
  border: thin solid #ccc;
  min-height: 300px;
  margin-inline: auto;
  padding: 10px;
  box-shadow: 0 0 8px #ccc;
  gap: 10px;
`;

export default Paper;
