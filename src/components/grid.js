import styled from 'styled-components';
import deviceWidth from '../utils/device-width';

const GridItem = styled.View`
  border-radius: 3px;
  justify-content: center;
  padding: 10px;
  width: ${deviceWidth / 2};
`;

export default GridItem;
