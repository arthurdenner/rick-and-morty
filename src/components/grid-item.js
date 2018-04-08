import styled from 'styled-components';
import { windowWidth } from '../utils/dimensions';

const GridItem = styled.TouchableOpacity`
  border-radius: 3px;
  justify-content: center;
  padding: 15px 10px 0;
  width: ${windowWidth / 2};
`;

export default GridItem;
