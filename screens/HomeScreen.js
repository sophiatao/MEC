import React from 'react';
import {View, Text, StyleSheet, FlatList, TextInput, Button } from 'react-native';
import { Col, Grid, Row } from "react-native-easy-grid";
import Input from './Input';
import CropProfile from './CropProfile';

const extractKey = ({id}) => id;

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nextID: 5,
            sampleText: [
                {id: 0, text: "Corn", waterVolume: "1.29", min: "1", max: "2"},
                {id: 1, text: 'Pumpkin', waterVolume: "1.00", min: "1", max: "2"},
                {id: 2, text: 'Bean', waterVolume: "1.01", min: "1", max: "2"},
                {id: 3, text: 'Squash', waterVolume: "1.12", min: "1", max: "2"},
                {id: 4, text: "Apple", waterVolume: "1.12", min: "1", max: "2"},
            ]
        }
        this.addInput = this.addInput.bind(this);
        this.navigateToCrop = this.navigateToCrop.bind(this);
    }
  static navigationOptions = {
    title: 'Crop profiles',
  };

    renderItem = ({item}) => {
    return (
        <Row style={styles.row}><Button title={item.text} onPress={() => {const { navigate } = this.props.navigation; navigate('Links', { text: item.text, waterVolume: this.state.waterVolume, min: this.state.min, max: this.state.max,})}}></Button></Row>
    )
  }

  navigateToCrop(itemtext) {
    const { navigate } = this.props.navigation;
    navigate('CropProfile', { text: itemtext, waterVolume: this.state.waterVolume, min: this.state.min, max: this.state.max,})
  }

  addInput(content) {
    arr = this.state.sampleText;
    nextNextID = this.state.nextID + 1;
    arr.unshift({id: this.state.nextID, text: content});
    this.setState({nextID: nextNextID, sampleText: arr});
    alert(this.state.sampleText[5].text);
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
        <View style={styles.container}>
        <Text style={styles.header}>Add a crop:</Text>
        <Input addInput={this.addInput} />
        <FlatList
          data={this.state.sampleText}
          renderItem={this.renderItem}
          keyExtractor={extractKey}
        />
      </View>
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
