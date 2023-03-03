import styled from "styled-components";

const CardContainer = styled.div`
  min-width: 200px;
  max-width: 300px;
  border: thin solid #ccc;
  box-shadow: ${(props) => `0 0 8px ${props.theme.colors.gray}`};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default CardContainer;
