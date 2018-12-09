import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Animated, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import styles from './VentureStyles2.js';

export default class Venture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animation: new Animated.Value(0),
            opacity: new Animated.Value(1),
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

    handlePress = () => {
        this.state.animation.setValue(0);
        this.state.opacity.setValue(1);

        Animated.timing(this.state.animation, {
            toValue: 1,
            duration: 1500,
        }).start(({ finished }) => {
            if (finished) {
                Animated.timing(this.state.opacity, {
                    toValue: 0,
                    duration: 200,
                }).start();
            }
        });
    }

    render() {
        return (
            <View style={[styles.item, styles.column]}>
                <View style={styles.row}>
                    
                    <TouchableOpacity onPress={this.handlePress}>
                        <Image style={styles.image} source={this.props.asset.image} />
                    </TouchableOpacity>

                    <View style={[styles.container2, styles.column ]}>
                        <Text style={styles.itemHeader}>{this.props.asset.name}</Text>

                        { /* Progress Bar */ }
                        <View style={styles.progressBar}>
                            <View style={StyleSheet.absoluteFill}>
                                <Animated.View style={[styles.progress, this.progressStyle]} />
                            </View>
                            <Text style={styles.progressBarText}>$ {this.props.asset.Ri}</Text>
                        </View>

                    </View>
                </View>
            </View>
        );
    }
}