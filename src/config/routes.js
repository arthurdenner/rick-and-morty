import { StackNavigator } from 'react-navigation';
import Characters from '../screens/Characters';
import Location from '../screens/Location';
import SingleCharacter from '../screens/SingleCharacter';

const HomeStack = StackNavigator(
  {
    Home: {
      screen: Characters,
      navigationOptions: {
        header: () => null,
      },
    },
    Location: {
      screen: Location,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.name}`,
      }),
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
