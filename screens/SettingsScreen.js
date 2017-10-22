import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import SelfInput from "./SelfInput";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Irrigation Nodes',

  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
    <Grid>
        <Row>
            <Col style={styles.red}><SelfInput texti={"Apple"} /></Col>
            <Col style={styles.green}><SelfInput texti={"Apple"} /></Col>
            <Col style={styles.yellow}><SelfInput texti={"Apple"} /></Col>
            <Col style={styles.yellow}><SelfInput texti={"Squash"} /></Col>
        </Row>
        <Row>
            <Col style={styles.yellow}><SelfInput texti={"Squash"} /></Col>
            <Col style={styles.green}><SelfInput texti={"Squash"} /></Col>
            <Col style={styles.red}><SelfInput texti={"Squash"} /></Col>
            <Col style={styles.yellow}><SelfInput texti={"Squash"} /></Col>
        </Row>
        <Row>
            <Col style={styles.red}><SelfInput texti={"Squash"} /></Col>
            <Col style={styles.green}><SelfInput texti={"Squash"} /></Col>
            <Col style={styles.yellow}><SelfInput texti={"Corn"} /></Col>
            <Col style={styles.red}><SelfInput texti={"Squash"} /></Col>
        </Row>
        <Row>
            <Col style={styles.green}><SelfInput texti={"Corn"} /></Col>
            <Col style={styles.red}><SelfInput texti={"Corn"} /></Col>
            <Col style={styles.yellow}><SelfInput texti={"Corn"} /></Col>
            <Col style={styles.green}><SelfInput texti={"Corn"} /></Col>
        </Row>
        <Row>
            <Col style={styles.green}><SelfInput texti={"Corn"} /></Col>
            <Col style={styles.yellow}><SelfInput texti={"Corn"} /></Col>
            <Col style={styles.red}><SelfInput texti={"Corn"} /></Col>
            <Col style={styles.yellow}><SelfInput texti={"Corn"} /></Col>
        </Row>
    </Grid>
    )
  }
}

const styles = StyleSheet.create({
    red: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#e88178",
        borderRadius: 10,
        margin: 10,
    },
    green: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#80d666",
        borderRadius: 10,
        margin: 10,
    },
    yellow: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fcfc80",
        borderRadius: 10,
        margin: 10,
    },
    text: {
    color: '#000',
    fontFamily: 'Helvetica',
    fontWeight: '100',
  },
})
