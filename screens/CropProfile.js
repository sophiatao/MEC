import React from 'react';
import {View, Text, StyleSheet, FlatList, TextInput, Button } from 'react-native';
import { Col, Grid, Row } from "react-native-easy-grid";
import Input from './Input';


export default class CropProfile extends React.Component {
    constructor(props) {
        super(props);
    }
  static navigationOptions = {
    title: "Crop",
  };


  render() {
    return (
        <Text> {this.props.navigation.state.text}</Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'skyblue',
  },
  row: {
    marginBottom: 5,
    padding: 15,
    backgroundColor: '#22485e',
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontFamily: 'Helvetica',
    fontWeight: '100',
  },
  header: {
    paddingTop: 15,
    fontSize: 24,
    marginLeft: 0,
    backgroundColor: 'skyblue',
    marginTop: 0,
    color: '#22485e',
    fontFamily: 'Helvetica',
    fontWeight: '100',
  },

});
