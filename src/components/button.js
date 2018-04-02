import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.TouchableOpacity`
  margin-top: 10px;
  align-self: stretch;
  padding: 10px;
  align-items: center;
  background-color: #0074d9;
  border-radius: 3px;
`;

const Text = styled.Text`
  color: #fafafa;
`;

const Button = ({ text, ...rest }) => (
  <Container {...rest}>
    <Text>{text}</Text>
  </Container>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
