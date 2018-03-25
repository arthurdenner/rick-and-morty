import styled from 'styled-components';
import { windowWidth } from '../utils/dimensions';

const GridItem = styled.View`
  border-radius: 3px;
  justify-content: center;
  padding: 0 10px;
  margin-bottom: 10px;
  width: ${windowWidth / 2};
`;

export default GridItem;
