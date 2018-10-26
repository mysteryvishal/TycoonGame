import React, { Component } from 'react';
import { Alert, View, Text, TouchableOpacity, Image, Animated, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import styles from '../body/bodyStyles';
import PBstyles from '../progressBar/progressBarStyles'

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
                    duration: 200
                }).start();
            }
        });
    }

    render() {
        return (
            <View style={styles.item}>
                <View style={styles.container1}>
                    <TouchableOpacity onPress={this.handlePress}>
                        <View>
                            <Image style={styles.image} source={this.props.asset.image} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.container2}>
                        <Text style={styles.itemHeader}>{this.props.asset.name}</Text>

                        {/*progressbar*/}
                        <TouchableWithoutFeedback>
                            <View style={PBstyles.button}>
                                <View style={StyleSheet.absoluteFill}>
                                    <Animated.View style={[PBstyles.progress, this.progressStyle]} />
                                </View>
                                <Text style={PBstyles.buttonText}>$ 1</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        {/*progressbar*/}

                    </View>
                </View>
            </View>
        );
    }
}