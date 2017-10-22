import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Nodes',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
    <Grid>
        <Row>
            <Col style={styles.red}><Text>Corn</Text></Col>
            <Col style={styles.green}><Text>Corn</Text></Col>
            <Col style={styles.yellow}><Text>Corn</Text></Col>
            <Col style={styles.yellow}><Text>Corn</Text></Col>
        </Row>
        <Row>
            <Col style={styles.yellow}><Text>Corn</Text></Col>
            <Col style={styles.green}><Text>Corn</Text></Col>
            <Col style={styles.yellow}><Text>Corn</Text></Col>
            <Col style={styles.yellow}><Text>Corn</Text></Col>
        </Row>
        <Row>
            <Col style={styles.green}><Text>Corn</Text></Col>
            <Col style={styles.red}><Text>Corn</Text></Col>
            <Col style={styles.yellow}><Text>Corn</Text></Col>
            <Col style={styles.green}><Text>Corn</Text></Col>
        </Row>
        <Row>
            <Col style={styles.green}><Text>Corn</Text></Col>
            <Col style={styles.yellow}><Text>Corn</Text></Col>
            <Col style={styles.red}><Text>Corn</Text></Col>
            <Col style={styles.yellow}><Text>Corn</Text></Col>
        </Row>
    </Grid>
    )
  }
}

const styles = StyleSheet.create({
    red: {
        backgroundColor: "red",
    },
    green: {
        backgroundColor: "green",
    },
    yellow: {
        backgroundColor: "yellow",
    }
})
