import React, { Component } from 'react';
import { View, Text, ScrollView, AsyncStorage } from 'react-native';
import styles from './BodyStyles';
import Venture from '../ventures/Venture';

let money = 5000;
let ventures = {
    OJS: {
        name: 'Orange Juice Stand',
        image: require('../static/orange-juice.png'),
        Ri: 1,
    },
    NPS: {
        name: 'Newspaper Stand',
        image: require('../static/newspaper.jpg'),
        Ri: 5,
    },
};

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.onPress = () => this.getVentures(this)

        AsyncStorage.setItem('money', money.toString())
        AsyncStorage.setItem('ventures', JSON.stringify(ventures))

        setInterval(async () => {
            this.setState({ money: await AsyncStorage.getItem('money') });
        }, 1000 / 5);
        // js race condition (good to talk about :)
    }

    async componentDidMount() {
        this.setState({ money: await AsyncStorage.getItem('money') });
    }

    render() {
        return(
            <View style={styles.itemsContainer}>
                <View style={styles.bankContainer}>
                    <Text style={styles.bankText}>$ {this.state.money}</Text>
                </View>

                <ScrollView>
                    <Venture asset={'OJS'} />
                    <Venture asset={'NPS'} />
                </ScrollView>
            </View>
        );
    }
}