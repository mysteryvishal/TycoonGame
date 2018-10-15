import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './components/header/header';
import Body from './components/body/body2';
import styles from './components/mainStyles';

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