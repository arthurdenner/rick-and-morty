import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.View`
  flex-direction: row;
  padding-top: 10px;
`;

const BoldText = styled.Text`
  font-weight: 600;
`;

const LinkText = styled.Text`
  color: #0074d9;
`;

const ListItem = ({ label, onPress, value }) => (
  <Container>
    <BoldText>{label}: </BoldText>
    {value.id ? (
      <TouchableOpacity onPress={() => onPress(value, label)}>
        <LinkText>{value.name}</LinkText>
      </TouchableOpacity>
    ) : (
      <Text>{value.name || value || 'Unknown'}</Text>
    )}
  </Container>
);

ListItem.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

ListItem.defaultProps = {
  onPress: () => {},
  value: 'Unknown',
};

export default ListItem;
