import { FC, useId, InputHTMLAttributes } from "react";
import styled from "styled-components";

type InputProps = {
  width?: string | number;
  fullWidth?: boolean;
};

type TextInputProps = {
  label?: string;
} & InputProps &
  InputHTMLAttributes<HTMLInputElement>;

export const Input = styled.input<InputProps>`
  padding: 6px;
  display: block;
  width: ${(props) =>
    typeof props.width === "string"
      ? props.width
      : typeof props.width === "number"
      ? `${props.width}px`
      : props.fullWidth
      ? "100%"
      : "auto"};
`;

const TextInput: FC<TextInputProps> = ({ label, ...restProps }) => {
  const id = useId();
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <Input {...restProps} />
    </>
  );
};

export default TextInput;
