import styled from "styled-components";

const Chip = styled.span`
  border-radius: 2px;
  background-color: ${(props) => props.theme.colors.lightPrimary};
  padding: 6px 10px;
  width: max-content;
`;

export default Chip;
