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
        this.setInput = this.setInput.bind(this);
    }


    renderItem = ({item}) => {
    return (
        <TouchableOpacity onPress={() => {const { navigate } = this.props.navigation; navigate('Crops', { setInput: this.setInput, text: item.text, waterVolume: item.waterVolume, min: item.min, max: item.max,})}}><Row style={styles.row}><Text style={styles.text}>{item.text}</Text></Row></TouchableOpacity>
    )
  }


  addInput(content) {
    arr = this.state.sampleText;
    nextNextID = this.state.nextID + 1;
    arr.unshift({id: this.state.nextID, text: content});
    this.setState({nextID: nextNextID, sampleText: arr});
  }

  setInput(param, text) {
        arr = this.state.sampleText;
    nextNextID = this.state.nextID + 1;
    arr.unshift({$: this.state.nextID, text: content});
    this.setState({nextID: nextNextID, sampleText: arr});

  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
        <View style={styles.container}>
        <Text style={styles.header}>To add crop, enter crop name and pull down to update</Text>
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
    color: '#000',
    fontFamily: 'Helvetica',
    fontWeight: '100',
  },
  header: {
    paddingTop: 15,
    fontSize: 16,
    marginLeft: 0,
    marginTop: 0,
    color: '#000',
    fontFamily: 'Helvetica',
    fontWeight: '100',
  },

});
