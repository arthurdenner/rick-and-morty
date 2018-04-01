import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { SINGLE_CHARACTER } from '../queries/character';
import { Container, Image, ListItem, Query } from '../components';

const SingleCharacter = ({ navigation: { state: { params: character } } }) => (
  <Container>
    <Image height={300} resizeMode="cover" source={{ uri: character.image }} />
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
          <ListItem label="Location" value={char.location.name} />
          <ListItem label="Origin" value={char.origin.name} />
        </View>
      )}
    />
  </Container>
);

SingleCharacter.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SingleCharacter;
