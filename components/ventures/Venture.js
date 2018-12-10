import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Animated, StyleSheet, AsyncStorage } from 'react-native';
import styles from './VentureStyles.js';

export default class Venture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animation: new Animated.Value(0),
            opacity: new Animated.Value(1),
            venture: {},
        };

        progressInterpolate = this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0%', '100%'],
            extrapolate: 'clamp',
        });
        colorInterpolate = this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['rgb(71,255,99)', 'rgb(99,71,255)'],
        });

        this.progressStyle = {
            width: progressInterpolate,
            bottom: 0,
            backgroundColor: colorInterpolate,
            opacity: this.state.opacity,
        };
    }
    
    async componentWillMount() {
        this.setState({ money: await AsyncStorage.getItem('money') });
        const ventures = JSON.parse(await AsyncStorage.getItem('ventures'));
        const venture = ventures[this.props.asset];
        this.setState({ venture });
    }

    handlePress = async () => {
        this.state.animation.setValue(0);
        this.state.opacity.setValue(1);

        Animated.timing(this.state.animation, {
            toValue: 1,
            duration: 1500,
        }).start(async ({ finished }) => {
            if (finished) {
                Animated.timing(this.state.opacity, {
                    toValue: 0,
                    duration: 200,
                }).start();
            }
            const money = parseInt(await AsyncStorage.getItem('money')) + this.state.venture.Ri;
            await AsyncStorage.setItem('money', money.toString());
        });
    }

    render() {
        return (
            <View style={[styles.item, styles.column]}>

                <View style={styles.row}>
                    
                    <TouchableOpacity onPress={this.handlePress}>
                        <Image style={styles.image} source={this.state.venture.image} />
                    </TouchableOpacity>

                    <View style={[styles.container2, styles.column ]}>
                        <Text style={styles.itemHeader}>{this.state.venture.name}</Text>

                        { /* Progress Bar */ }
                        <View style={styles.progressBar}>
                            <View style={StyleSheet.absoluteFill}>
                                <Animated.View style={[styles.progress, this.progressStyle]} />
                            </View>
                            <Text style={styles.progressBarText}>$ {this.state.venture.Ri}</Text>
                        </View>

                    </View>
                </View>
            </View>
        );
    }
}