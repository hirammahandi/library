import { CSSProperties } from "react";
import styled from "styled-components";

type ContainerProps = {
  gap?: CSSProperties["gap"];
};

const Container = styled.section<ContainerProps>`
  padding: 40px;
  max-width: 1200px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.gap ? `${props.gap}px` : "0px")};
`;

export default Container;
