import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.View`
  flex-direction: row;
  padding-top: 10px;
`;

const BoldText = styled.Text`
  font-weight: 600;
`;

const ListItem = ({ label, value }) => (
  <Container>
    <BoldText>{label}: </BoldText>
    <Text>{value || 'Unknown'}</Text>
  </Container>
);

ListItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
};

ListItem.defaultProps = {
  value: 'Unknown',
};

export default ListItem;
