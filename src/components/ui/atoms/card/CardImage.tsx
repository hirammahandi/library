import { CSSProperties } from "react";
import styled from "styled-components";

type CardImageProps = {
  height?: CSSProperties["height"];
};

const CardImage = styled.div<CardImageProps>`
  position: relative;
  width: 100%;
  height: ${(props) =>
    typeof props.height === "string"
      ? props.height
      : typeof props.height === "number"
      ? `${props.height}px`
      : "250px"};
`;

export default CardImage;
