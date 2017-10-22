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
      headerStyle: { backgroundColor: 'white' },
  headerTitleStyle: { fontWeight: '100' },
  });


  render() {
     const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text style={styles.row}> Start of the day: </Text><View style={styles.selfinput}><SelfInput style={styles.selfinput} texti={params.time}></SelfInput></View>
        <Text style={styles.row}> Minimum moisture level:</Text><View style={styles.selfinput}><SelfInput style={styles.selfinput} texti={params.min}></SelfInput></View>
        <Text style={styles.row}> Maximum moisture level: </Text><View style={styles.selfinput}><SelfInput style={styles.selfinput} texti={params.max}></SelfInput></View>
        <Text style={styles.row}> Minimum flow: </Text><View style={styles.selfinput}><SelfInput style={styles.selfinput} texti={params.min1}></SelfInput></View>
        <Text style={styles.row}> Maximum flow: </Text><View style={styles.selfinput}><SelfInput style={styles.selfinput} texti={params.max2}></SelfInput></View>
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
    margin: 5,
    borderColor: '#fff',
    fontWeight: '100',
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
    marginLeft: 5,
    backgroundColor: 'whitesmoke',
  }

});

