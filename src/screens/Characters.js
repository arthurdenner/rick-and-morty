import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { Connect, query } from 'urql';
import { GridItem, Header, Image, Subtitle } from '../components';
import { allCharacters } from '../queries/character';

const Characters = () => (
  <View>
    <Header>Characters</Header>
    <Connect
      query={query(allCharacters)}
      children={({ loaded, data }) =>
        !loaded ? (
          <Text>Loading...</Text>
        ) : (
          <View>
            <FlatList
              data={data.characters.results}
              keyExtractor={item => item.id}
              numColumns={2}
              renderItem={({ item }) => (
                <GridItem>
                  {console.log(item)}
                  <Image source={{ uri: item.image }} />
                  <Subtitle>{item.name}</Subtitle>
                </GridItem>
              )}
            />
          </View>
        )
      }
    />
  </View>
);

export default Characters;
