import { FC, ReactNode } from "react";

type TextIndicatorProps = {
  label: string;
  content: ReactNode;
};

const TextIndicator: FC<TextIndicatorProps> = ({ label, content }) => (
  <div>
    <span>{label}: </span>
    {content}
  </div>
);

export default TextIndicator;
