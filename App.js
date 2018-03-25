import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Provider, Client } from 'urql';
import Characters from './src/screens/Characters';

const client = new Client({
  url: 'https://rickandmortyapi-gql.now.sh/graphql',
});

const theme = {};

const styles = StyleSheet.create({
  app: {
    paddingTop: StatusBar.currentHeight,
  },
});

class App extends React.Component {
  componentDidMount() {
    // console.log('💯');
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider client={client}>
          <View style={styles.app}>
            <Characters />
          </View>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
