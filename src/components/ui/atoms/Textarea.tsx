import { TextareaHTMLAttributes, forwardRef, useId } from "react";
import styled from "styled-components";

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  padding: 8px;

  &[data-error="true"] {
    border: thin solid red;
  }
  &[data-error="true"]:focus-visible {
    outline-color: red;
  }
`;

export default Textarea;
