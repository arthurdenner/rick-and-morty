import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, ListItem, Query } from '../components';
import { GET_LOCATION_BY_ID, ALL_LOCATIONS } from '../queries/location';

class Location extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  handleAllLocationsClick = () => {
    const { navigation: { navigate } } = this.props;

    navigate('List', {
      query: ALL_LOCATIONS,
      dataPath: 'locations',
      title: 'All locations',
      onListItem: item => navigate('Location', item),
    });
  };

  render() {
    const { navigation: { state: { params: location } } } = this.props;

    return (
      <Query
        dataPath="location"
        query={GET_LOCATION_BY_ID}
        variables={{ id: location.id }}
        children={loc => (
          <Container>
            <ListItem label="Dimension" value={loc.dimension} />
            <ListItem label="Type" value={loc.type} />
            <Button
              onPress={this.handleAllLocationsClick}
              text="See all locations"
            />
          </Container>
        )}
      />
    );
  }
}

export default Location;
