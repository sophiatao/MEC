import React from 'react';
import {View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import {StackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import CropProfile from './CropProfile';


export default class CropNavigator extends React.Component {
  static navigationOptions = {
    title: 'Crop profiles',
  };
  render() {
    return <Nav />;
  }
}

const Nav = StackNavigator({

    Home: {screen: HomeScreen,
        navigationOptions: {
      header: null,
    },},
    Crop: {screen: CropProfile},
})