import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider, Client } from 'urql';
import Navigation from './src/config/routes';

const client = new Client({
  url: 'https://rickandmortyapi-gql.now.sh/graphql',
});

const theme = {};

class App extends React.Component {
  componentDidMount() {
    // console.log('💯');
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider client={client}>
          <Navigation />
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
