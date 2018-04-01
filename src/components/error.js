import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import Centered from './centered';

const Error = ({ err }) => (
  <Centered>
    <Text>⚠️ An error occured ⚠️</Text>
    <Text>Error: {err}</Text>
  </Centered>
);

Error.propTypes = {
  err: PropTypes.string.isRequired,
};

export default Error;
