import styled, { css } from "styled-components";

type Props = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  spacing?: number;
};

const GridItem = styled.div<Props>`
  --xs: ${(props) => props.xs};
  --sm: ${(props) => props.sm};
  --md: ${(props) => props.md};
  --lg: ${(props) => props.lg};
  padding: 8px;
  max-width: ${(props) => `calc(100%/${12 / (props.xs ?? 12)})`};
  flex-basis: ${(props) => `calc(100%/${12 / (props.xs ?? 12)})`};
  box-sizing: border-box;
  margin: 0px;
  flex-grow: 0;
  ${(props) =>
    props.sm &&
    css`
      @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
        max-width: calc(100% / (12 / var(--sm)));
        flex-basis: calc(100% / (12 / var(--sm)));
      }
    `}

  ${(props) =>
    props.md &&
    css`
      @media (min-width: ${(props) => props.theme.breakpoints.md}) {
        max-width: calc(100% / (12 / var(--md)));
        flex-basis: calc(100% / (12 / var(--md)));
      }
    `}

  ${(props) =>
    props.lg &&
    css`
      @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
        max-width: calc(100% / (12 / var(--lg)));
        flex-basis: calc(100% / (12 / var(--lg)));
      }
    `}
`;

export default GridItem;
