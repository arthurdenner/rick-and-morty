import React from 'react';
import PropTypes from 'prop-types';
import List from './List';
import { ALL_LOCATIONS } from '../queries/location';

const Locations = ({ navigation }) => (
  <List
    navigation={{
      ...navigation,
      state: {
        ...navigation.state,
        params: {
          ...navigation.params,
          query: ALL_LOCATIONS,
          dataPath: 'locations',
          onListItem: item => navigation.navigate('SingleLocation', item),
        },
      },
    }}
  />
);

Locations.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Locations;
