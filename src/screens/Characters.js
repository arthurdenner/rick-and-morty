import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import {
  GridItem,
  FooterList,
  Header,
  Image,
  Query,
  Subtitle,
} from '../components';
import { GET_CHARACTERS } from '../queries/character';
import { windowHeight } from '../utils/dimensions';

class Characters extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

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

  handleCharacterClick = character => {
    const { navigation: { navigate } } = this.props;

    navigate('SingleCharacter', character);
  };

  render() {
    const { currentPage } = this.state;

    return (
      <View style={{ height: windowHeight }}>
        <Header>Characters</Header>
        <Query
          dataPath="characters"
          query={GET_CHARACTERS}
          variables={{ page: currentPage }}
          children={characters => (
            <FlatList
              ref={el => (this.flatlist = el)}
              data={characters.results}
              keyExtractor={item => item.id}
              numColumns={2}
              renderItem={({ item: character }) => (
                <GridItem onPress={() => this.handleCharacterClick(character)}>
                  <Image source={{ uri: character.image }} />
                  <Subtitle>{character.name}</Subtitle>
                </GridItem>
              )}
              ListFooterComponent={
                <FooterList
                  currentPage={currentPage}
                  info={characters.info}
                  getNextPage={this.getNextPage}
                  getPreviousPage={this.getPreviousPage}
                />
              }
            />
          )}
        />
      </View>
    );
  }
}

export default Characters;
