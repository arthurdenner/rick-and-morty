import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { SINGLE_CHARACTER } from '../queries/character';
import { Container, Image, ListItem, Query } from '../components';

class SingleCharacter extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  handleListItemClick = (value, label) => {
    if (label === 'Location' || label === 'Origin') {
      const { navigation: { navigate } } = this.props;

      navigate('SingleLocation', value);
    }
  };

  render() {
    const { navigation: { state: { params: character } } } = this.props;

    return (
      <Container>
        <Image
          height={300}
          resizeMode="cover"
          source={{ uri: character.image }}
        />
        <Query
          dataPath="character"
          query={SINGLE_CHARACTER}
          variables={{ id: character.id }}
          children={char => (
            <View>
              <ListItem label="Species" value={char.species} />
              <ListItem label="Type" value={char.type} />
              <ListItem label="Status" value={char.status} />
              <ListItem label="Gender" value={char.gender} />
              <ListItem
                label="Location"
                onPress={this.handleListItemClick}
                value={char.location}
              />
              <ListItem
                label="Origin"
                onPress={this.handleListItemClick}
                value={char.origin}
              />
            </View>
          )}
        />
      </Container>
    );
  }
}

export default SingleCharacter;
