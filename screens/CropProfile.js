import React from 'react';
import {View, Text, StyleSheet, FlatList, TextInput, Button } from 'react-native';
import { Col, Grid, Row } from "react-native-easy-grid";
import Input from './Input';


export default class CropProfile extends React.Component {
    constructor(props) {
        super(props);
    }
static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.text}`,
  });


  render() {
     const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text style={styles.row}> Water Volume: {params.waterVolume}</Text>
        <Text style={styles.row}> Minimum: {params.min} </Text>
        <Text style={styles.row}> Maximum: {params.max} </Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'white',
  },
  row: {
    marginTop: 5,
    padding: 5,
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
    backgroundColor: 'white',
    marginTop: 0,
    color: '#22485e',
    fontFamily: 'Helvetica',
    fontWeight: '100',
  },

});

