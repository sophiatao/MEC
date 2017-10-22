import React from 'react';
import {View, Text, StyleSheet, FlatList, TextInput, Button } from 'react-native';
import { Col, Grid, Row } from "react-native-easy-grid";
import SelfInput from './SelfInput';


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
        <Text style={styles.row}> Start of the day: </Text><SelfInput style={styles.selfinput} texti={params.waterVolume}></SelfInput>
        <Text style={styles.row}> Minimum moisture level:</Text><SelfInput texti={params.min}></SelfInput>
        <Text style={styles.row}> Maximum moisture level: </Text><SelfInput texti={params.max}></SelfInput>
        <Text style={styles.row}> Minimum flow: </Text><SelfInput texti={params.max}></SelfInput>
        <Text style={styles.row}> Maximum flow: </Text><SelfInput texti={params.max}></SelfInput>
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
    borderColor: '#fff',
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
  selfinput: {
    borderWidth: 0.5,
    borderRadius: 10,
  }

});

