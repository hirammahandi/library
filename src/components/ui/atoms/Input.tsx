import { CSSProperties } from "react";
import styled from "styled-components";

export type InputProps = {
  width?: CSSProperties["width"];
  fullWidth?: boolean;
};

const Input = styled.input<InputProps>`
  padding: 8px;
  display: block;
  width: ${(props) =>
    typeof props.width === "string"
      ? props.width
      : typeof props.width === "number"
      ? `${props.width}px`
      : props.fullWidth
      ? "100%"
      : "auto"};

  &[data-error="true"] {
    border: thin solid red;
  }
`;

export default Input;
