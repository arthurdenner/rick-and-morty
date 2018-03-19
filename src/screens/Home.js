import React from 'react';
import { View, Text } from 'react-native';
import { Connect, query } from 'urql';
import { allCharacters } from '../queries/character';

const Home = () => (
  <View>
    <Text>Characters</Text>
    <Connect
      query={query(allCharacters)}
      children={({ loaded, data }) =>
        loaded ? (
          <View>
            {data.characters.results.map(c => <Text key={c.id}>{c.name}</Text>)}
          </View>
        ) : (
          <Text>Loading...</Text>
        )
      }
    />
  </View>
);

export default Home;
