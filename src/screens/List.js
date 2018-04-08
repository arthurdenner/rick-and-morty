import React, { Component } from 'react';
import { FlatList, ScrollView, Text } from 'react-native';
import PropTypes from 'prop-types';
import { FooterList, ListRow, Query } from '../components';

class List extends Component {
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

  render() {
    const { navigation: { state: { params } } } = this.props;
    const { currentPage } = this.state;

    return (
      <Query
        {...params}
        variables={{ page: currentPage }}
        children={payload => (
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <FlatList
              ref={el => (this.flatlist = el)}
              data={payload.results}
              keyExtractor={item => item.id}
              contentContainerStyle={{ flex: 1 }}
              renderItem={({ item }) => (
                <ListRow onPress={() => params.onListItem(item)}>
                  <Text>{item.name}</Text>
                </ListRow>
              )}
            />
            <FooterList
              currentPage={currentPage}
              info={payload.info}
              getNextPage={this.getNextPage}
              getPreviousPage={this.getPreviousPage}
            />
          </ScrollView>
        )}
      />
    );
  }
}

export default List;
