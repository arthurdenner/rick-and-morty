import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider, Client } from 'urql';
import Home from './src/screens/Home';

const client = new Client({
  url: 'http://192.168.1.8:8080/graphql',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  componentDidMount() {
    // console.log('💯');
  }

  render() {
    return (
      <Provider client={client}>
        <View style={styles.container}>
          <Home />
        </View>
      </Provider>
    );
  }
}
