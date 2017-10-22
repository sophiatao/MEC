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
                {id: 0, text: "Corn", time: "7:00 a.m.", min: "0.700", max: "2.000", min1: "0.020", max2: "0.040"},
                {id: 1, text: 'Pumpkin', time: "1:00 p.m.", min: "0.300", max: "1.200", min1: "0.020", max2: "0.090"},
                {id: 2, text: 'Bean', time: "11:00 a.m.", min: "0.000", max: "0.800", min1: "0.010", max2: "0.080"},
                {id: 3, text: 'Squash', time: "9:10 a.m.", min: "1.200", max: "4.000", min1: "0.030", max2: "0.100"},
                {id: 4, text: "Apple", time: "10:00 p.m.", min: "5.000", max: "5.200", min1: "0.040", max2: "0.070"},
            ]
        }
        this.addInput = this.addInput.bind(this);
        this.setInput = this.setInput.bind(this);
    }


    renderItem = ({item}) => {
    return (
        <TouchableOpacity onPress={() => {const { navigate } = this.props.navigation; navigate('Crops', { setInput: this.setInput, text: item.text, time: item.time, min: item.min, max: item.max, min1: item.min1, max2: item.max2})}}><Row style={styles.row}><Text style={styles.text}>{item.text}</Text></Row></TouchableOpacity>
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
