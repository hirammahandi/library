import { TextareaHTMLAttributes, forwardRef, useId } from "react";
import { Textarea } from "../ui/atoms";

type TextareaInputProps = {
  label?: string;
  error?: boolean;
  helperText?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextareaInput = forwardRef<HTMLTextAreaElement, TextareaInputProps>(function TextareaInput(
  { label, id, helperText, error, ...restProps },
  ref
) {
  const generatedId = useId();

  return (
    <div>
      {label && <label htmlFor={id ?? generatedId}>{label}</label>}
      <Textarea {...restProps} id={id ?? generatedId} ref={ref} has-error={error} />
      {helperText && <span>{helperText}</span>}
    </div>
  );
});

export default TextareaInput;
