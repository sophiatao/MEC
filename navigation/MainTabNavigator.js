import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom, StackNavigator} from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

import CropNavigator from '../screens/CropNavigator';


export default TabNavigator(
  {
    Home: {
      screen: CropNavigator,
    },
    Settings: {
      screen: SettingsScreen,
    },
    Links: {
      screen: LinksScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = Platform.OS === 'ios'
              ? `ios-flower${focused ? '' : '-outline'}`
              : 'md-flower';
            break;
          case 'Links':
            iconName = Platform.OS === 'ios'
              ? `ios-clipboard${focused ? '' : '-outline'}`
              : 'md-clipboard';
            break;
          case 'Settings':
            iconName = Platform.OS === 'ios'
              ? `ios-grid${focused ? '' : '-outline'}`
              : 'md-grid';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

