import styled from 'styled-components';

const Image = styled.Image`
  height: ${props => props.height || 100}px;
  border-radius: 3px;
`;

export default Image;
