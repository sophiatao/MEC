import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default class Input extends Component {

  state = {
    text: '',
  }

  onChangeText = (text) => this.setState({text})

  onSubmitEditing = () => {
    const {text} = this.state

    if (!text) return // Don't submit if empty
    this.props.addInput(text);
    this.setState({text: ''})
  }

  render() {
    const {text} = this.state

    return (
      <TextInput
        style={styles.input}
        value={text}
        placeholder="Enter crop name here"
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmitEditing}
      />
    )
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    height: 50,
    fontFamily: 'Helvetica',
    fontWeight: '100',
  },
})
