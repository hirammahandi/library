import { TextareaHTMLAttributes, forwardRef, useId } from "react";
import styled from "styled-components";

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  padding: 8px;
  &[has-error="true"] {
    border: thin solid red;
  }
`;

export default Textarea;
