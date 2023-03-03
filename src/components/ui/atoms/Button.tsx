import { CSSProperties } from "react";
import styled from "styled-components";

type ButtonProps = {
  color: "primary" | "secondary" | "lightPrimary" | "gray" | "black" | "white" | `#${number}`;
  variant: "outlined" | "contained" | "text";
  width?: CSSProperties["width"];
};

const Button = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.variant === "contained" ? props.theme.colors[props.color] ?? props.color : "transparent"};
  padding: 8px;
  border: ${(props) =>
    props.variant === "outlined"
      ? `thin solid ${props.theme.colors[props.color] ?? props.color}`
      : "transparent"};
  border-radius: 2px;
  cursor: pointer;
  font-weight: 600;
  color: ${(props) =>
    ["text", "outlined"].includes(props.variant)
      ? props.theme.colors[props.color]
      : props.color === "black"
      ? props.theme.colors.white
      : props.color ?? "#2b2a2a"};
  transition: background-color 0.5s, scale 0.2s;
  width: ${(props) =>
    typeof props.width === "string"
      ? props.width
      : typeof props.width === "number"
      ? `${props.width}px`
      : "auto"};
  &:hover {
    background-color: ${(props) =>
      ["text", "outlined"].includes(props.variant)
        ? props.theme.colors.lightPrimary + 50
        : props.theme.colors.lightPrimary};
  }
  &:active {
    scale: 0.9;
  }
  &:disabled,
  &[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`;

export default Button;
