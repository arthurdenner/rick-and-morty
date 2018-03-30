import { StackNavigator } from 'react-navigation';
import Characters from '../screens/Characters';
import SingleCharacter from '../screens/SingleCharacter';

const HomeStack = StackNavigator(
  {
    Home: {
      screen: Characters,
      navigationOptions: {
        header: () => null,
      },
    },
    SingleCharacter: {
      screen: SingleCharacter,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.name}`,
      }),
    },
  },
  {
    headerMode: 'screen',
  }
);

const Navigation = StackNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        header: () => null,
      },
    },
  },
  {
    mode: 'modal',
  }
);

export default Navigation;
