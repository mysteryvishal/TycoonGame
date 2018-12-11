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
        Nv: 1,
        ppv: 100,
    },
    NPS: {
        name: 'Newspaper Stand',
        image: require('../static/newspaper.jpg'),
        Ri: 5,
        Nv: 1,
        ppv: 500,
    },
    SHP: {
        name: 'Shop',
        image: require('../static/shop.png'),
        Ri: 50,
        Nv: 1,
        ppv: 1000,
    },
    PHN: {
        name: 'Phone Company',
        image: require('../static/phone.png'),
        Ri: 1000,
        Nv: 1,
        ppv: 100000,
    },
    MEC: {
        name: 'Mechanics',
        image: require('../static/mechanic.png'),
        Ri: 300,
        Nv: 1,
        ppv: 500000,
    },
    HTC: {
        name: 'Hotel Business',
        image: require('../static/hotel-business.png'),
        Ri: 10000,
        Nv: 1,
        ppv: 1000000,
    },
    FLM: {
        name: 'Film Studio',
        image: require('../static/film.png'),
        Ri: 100000,
        Nv: 1,
        ppv: 5000000,
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
        }, 1000 / 0.8);
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
                    <Venture asset={'SHP'} />
                    <Venture asset={'PHN'} />
                    <Venture asset={'MEC'} />
                    <Venture asset={'HTC'} />
                    <Venture asset={'FLM'} />
                </ScrollView>
            </View>
        );
    }
}