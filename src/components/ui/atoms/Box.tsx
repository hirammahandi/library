import styled, { CSSProperties } from "styled-components";

type BoxProps = {
  st: CSSProperties;
};

const Box = styled.div<BoxProps>((props) => ({ ...props.st }));

export default Box;
