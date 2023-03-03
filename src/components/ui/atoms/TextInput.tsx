import { FC, useId, InputHTMLAttributes, CSSProperties } from "react";
import styled from "styled-components";

type InputProps = {
  width?: CSSProperties["width"];
  fullWidth?: boolean;
};

type TextInputProps = {
  label?: string;
} & InputProps &
  InputHTMLAttributes<HTMLInputElement>;

export const Input = styled.input<InputProps>`
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
`;

const TextInput: FC<TextInputProps> = ({ label, id, ...restProps }) => {
  const generatedId = useId();
  return (
    <div>
      {label && <label htmlFor={id ?? generatedId}>{label}</label>}
      <Input {...restProps} id={id ?? generatedId} />
    </div>
  );
};

export default TextInput;
