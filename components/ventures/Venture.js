import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../body/bodyStyles';
import ProgressBar from '../progressBar/progressBar';

const progressBarBar = require('../progressBar/progressBar')

export default class Venture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            presses: 0,
        };
    }

    handlePress() {
        mon++
    }

    render() {
        return (
            <View style={styles.item}>
                <View style={styles.container1}>
                    <TouchableOpacity onPress={progressBarBar.handlePress()}>
                        <View>
                            <Image style={styles.image} source={this.props.asset.image} />
                            <Text>{mon}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.container2}>
                        <Text style={styles.itemHeader}>{this.props.asset.name}</Text>
                        <ProgressBar />
                    </View>
                </View>
            </View>
        );
    }
}