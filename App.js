import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/header/Header';
import Body from './components/body/Body2';

export default class App extends Component {
    render() {
        return (
            <View style={styles.app}>
                {/*WU: why is the program modular like this*/}

                <Header />
                <Body />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    app: {
        backgroundColor: '#FFD54F',
        flex: 1,
    }
});