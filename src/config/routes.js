import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Characters from '../screens/Characters';
import Locations from '../screens/Locations';
import SingleCharacter from '../screens/SingleCharacter';
import SingleLocation from '../screens/SingleLocation';

const Navigation = DrawerNavigator({
  CharactersFlow: {
    screen: StackNavigator({
      Characters: {
        screen: Characters,
        navigationOptions: {
          title: 'Characters',
        },
      },
      SingleCharacter: {
        screen: SingleCharacter,
        navigationOptions: ({ navigation }) => ({
          title: `${navigation.state.params.name}`,
        }),
      },
    }),
    navigationOptions: {
      title: 'Characters',
    },
  },
  LocationsFlow: {
    screen: StackNavigator({
      Locations: {
        screen: Locations,
        navigationOptions: {
          title: 'Locations',
        },
      },
      SingleLocation: {
        screen: SingleLocation,
        navigationOptions: ({ navigation }) => ({
          title: `${navigation.state.params.name}`,
        }),
      },
    }),
    navigationOptions: {
      title: 'Locations',
    },
  },
});

export default Navigation;
