import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../body/bodyStyles';
import ProgressBar from '../progressBar/progressBar3';

export default class Venture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            presses: 0
        };
    }

    handlePress() {
        this.setState({ presses: ++this.state.presses });
        ProgressBar.handlePress
    }

    render() {
        return (
            <View style={styles.item}>
                <View style={styles.container1}>
                    <TouchableOpacity onPress={handlePress()}>
                        <View>
                            <Image style={styles.image} source={require('../static/orange-juice.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.container2}>
                        <Text style={styles.itemHeader}>{this.props.name}</Text>
                        <ProgressBar presses={this.state.presses} />
                    </View>
                </View>
            </View>
        );
    }
}