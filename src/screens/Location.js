import React from 'react';
import PropTypes from 'prop-types';
import { Container, ListItem, Query } from '../components';
import { GET_LOCATION_BY_ID } from '../queries/location';

const Location = ({ navigation: { state: { params: location } } }) => (
  <Query
    dataPath="location"
    query={GET_LOCATION_BY_ID}
    variables={{ id: location.id }}
    children={loc => (
      <Container>
        <ListItem label="Dimension" value={loc.dimension} />
        <ListItem label="Type" value={loc.type} />
      </Container>
    )}
  />
);

Location.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Location;
