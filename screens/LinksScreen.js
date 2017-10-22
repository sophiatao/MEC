import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Col, Grid, Row } from "react-native-easy-grid";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'User Documents',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Usage guidelines: {"\n"}</Text>
        <Row style={styles.row}><Text style={styles.text}>This irrigation app will help give crops the optimum amount of water based on your parameters and data from a precipitation database.</Text></Row>
        <Row style={styles.row}><Text style={styles.text}>1. Add a crop in the "Crop profiles" screen according to what you would like to plant.</Text></Row>
        <Col style={styles.row}><Row><Text style={styles.text}>2. Fill in parameters for each crop:</Text></Row>
        <Row><Text style={styles.textindent}>Name of crop: What you will be planting; this is to be filled in in the Crop Profiles.</Text></Row>
        <Row><Text style={styles.textindent}>Start of the day: The time at which the irrigation system will start.</Text></Row>
        <Row><Text style={styles.textindent}>Minimum moisture level: The minimum soil moisture constraint for the crop.</Text></Row>
        <Row><Text style={styles.textindent}>Maximum moisture level: The maximum soil moisture constraint for the crop.</Text></Row>
        <Row><Text style={styles.textindent}>Minimum flow: The minimum amount per unit time distributed to the crop.</Text></Row>
        <Row><Text style={styles.textindent}>Minimum flow: The maximum amount per unit time distributed to the crop.</Text></Row></Col>
        <Row style={styles.row}><Text style={styles.text}>3. Assign crops to irrigation nodes in the "Irrigation nodes" screen. The grid in the "Irrigation nodes" screen correspond to the layout of the nodes on your field. Once submitted, the irrigation nodes will use the crop profiles to water your plants automatically.</Text></Row>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
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
    padding: 2,
  },
    textindent: {
    color: '#000',
    fontFamily: 'Helvetica',
    fontWeight: '100',
    padding: 2,
    marginLeft: 10,
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
