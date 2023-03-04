import styled from "styled-components";

const DetailsContainer = styled.div`
  max-width: 650px;
  width: 600px;
  margin-inline: auto;
  box-shadow: ${(props) => `0 0 8px ${props.theme.colors.gray}`};
  border: thin solid #ccc;
  height: 350px;
  border-radius: 8px;
  display: flex;
  gap: 40px;
`;

export default DetailsContainer;
