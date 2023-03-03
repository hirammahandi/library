import styled from "styled-components";

const TruncateParagraph = styled.p`
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default TruncateParagraph;
