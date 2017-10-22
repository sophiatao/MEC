import React from 'react';
import {View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import {StackNavigator} from 'react-navigation'
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

    renderItem = ({item}) => {
    return (
        <TouchableOpacity onPress={() => {const { navigate } = this.props.navigation; navigate('Crops', { text: item.text, waterVolume: this.state.waterVolume, min: this.state.min, max: this.state.max,})}}><Row style={styles.row}><Text>{item.text}</Text></Row></TouchableOpacity>
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
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
        <View style={styles.container}>
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
    backgroundColor: 'white',
  },
  row: {
    marginBottom: 5,
    padding: 15,
    backgroundColor: 'whitesmoke',
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
    backgroundColor: 'white',
    marginTop: 0,
    color: '#22485e',
    fontFamily: 'Helvetica',
    fontWeight: '100',
  },

});
