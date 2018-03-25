import React, { Component } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Connect, query } from 'urql';
import { GridItem, FooterList, Header, Image, Subtitle } from '../components';
import { GET_CHARACTERS } from '../queries/character';
import { windowHeight } from '../utils/dimensions';

class Characters extends Component {
  state = {
    currentPage: 1,
  };

  getPage = currentPage => {
    this.flatlist.scrollToIndex({ index: 0 });

    this.setState({ currentPage });
  };

  getPreviousPage = () => {
    const { currentPage } = this.state;

    this.getPage(currentPage - 1);
  };

  getNextPage = () => {
    const { currentPage } = this.state;

    this.getPage(currentPage + 1);
  };

  render() {
    const { currentPage } = this.state;
    const viewHeight = windowHeight - 20;

    return (
      <View style={{ height: viewHeight }}>
        <Header>Characters</Header>
        <Connect
          query={query(GET_CHARACTERS, { page: currentPage })}
          children={({ fetching, error, loaded, data }) => {
            if (fetching || !loaded) {
              return <Text style={{ paddingHorizontal: 10 }}>Loading...</Text>;
            }

            if (error) {
              return (
                <Text style={{ paddingHorizontal: 10 }}>Error: {error}</Text>
              );
            }

            return (
              <FlatList
                ref={el => (this.flatlist = el)}
                data={data.characters.results}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={({ item }) => (
                  <GridItem>
                    <Image source={{ uri: item.image }} />
                    <Subtitle>{item.name}</Subtitle>
                  </GridItem>
                )}
                ListFooterComponent={
                  <FooterList
                    currentPage={currentPage}
                    info={data.characters.info}
                    getNextPage={this.getNextPage}
                    getPreviousPage={this.getPreviousPage}
                  />
                }
              />
            );
          }}
        />
      </View>
    );
  }
}

export default Characters;
