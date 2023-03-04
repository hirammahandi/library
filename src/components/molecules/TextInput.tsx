import { InputHTMLAttributes, forwardRef, useId } from "react";
import { Input } from "../ui/atoms";
import { InputProps } from "../ui/atoms/Input";

export type TextInputProps = {
  label?: string;
  error?: boolean;
  helperText?: string;
} & InputProps &
  InputHTMLAttributes<HTMLInputElement>;

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(function TextInput(
  { label, id, error, helperText, ...restProps },
  ref
) {
  const generatedId = useId();
  return (
    <div>
      {label && <label htmlFor={id ?? generatedId}>{label}</label>}
      <Input {...restProps} id={id ?? generatedId} ref={ref} data-error={error} />
      {helperText && <span>{helperText}</span>}
    </div>
  );
});

export default TextInput;
