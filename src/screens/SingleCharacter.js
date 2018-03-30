import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { Connect, query } from 'urql';
import { SINGLE_CHARACTER } from '../queries/character';
import { Container, Image, ListItem } from '../components';

const SingleCharacter = ({ navigation: { state: { params: character } } }) => (
  <Container>
    <Image height={300} resizeMode="cover" source={{ uri: character.image }} />
    <Connect
      query={query(SINGLE_CHARACTER, { id: character.id })}
      children={({ fetching, error, loaded, data }) => {
        if (fetching || !loaded) {
          return <Text style={{ paddingHorizontal: 10 }}>Loading...</Text>;
        }

        if (error) {
          return <Text style={{ paddingHorizontal: 10 }}>Error: {error}</Text>;
        }

        return (
          <View>
            <ListItem label="Species" value={data.character.species} />
            <ListItem label="Type" value={data.character.type} />
            <ListItem label="Status" value={data.character.status} />
            <ListItem label="Gender" value={data.character.gender} />
            <ListItem label="Location" value={data.character.location.name} />
            <ListItem label="Origin" value={data.character.origin.name} />
          </View>
        );
      }}
    />
  </Container>
);

SingleCharacter.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SingleCharacter;
