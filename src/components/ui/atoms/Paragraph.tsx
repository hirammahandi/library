import { CSSProperties } from "react";
import styled from "styled-components";

type ParagraphProps = {
  st: CSSProperties;
};

const Paragraph = styled.p<ParagraphProps>((props) => ({ ...props.st }));

export default Paragraph;
