import React from 'react';
import { View, Text, ScrollView, AsyncStorage } from 'react-native';
import styles from './BodyStyles';
import Venture from '../ventures/Venture';
import Assets from '../ventures/Assets';

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

AsyncStorage.setItem('money', money.toString());

AsyncStorage.setItem('ventures', JSON.stringify(ventures));

getMoney = async () => {
    try {
        let money = Number(await AsyncStorage.getItem('money'));
        return money
    }
    catch (error) {}
}

getVentures = async () => {
    try {
        let ventures = await AsyncStorage.getItem('ventures');
        alert(ventures)
    }
    catch (error) {
        alert(error)
    }
}

const body = () => {
    return (
        <View style={styles.itemsContainer}>
            <View style={styles.bankContainer}>
                <Text style={styles.bankText}>$ {Assets.Money}</Text>
            </View>

            <ScrollView>
                <Venture asset={Assets.OJS} />
                <Venture asset={Assets.NPS} />
                <Venture asset={Assets.SHP} />
                <Venture asset={Assets.MEC} />
                <Venture asset={Assets.HTC} />
                <Venture asset={Assets.FLM} />
                <Venture asset={Assets.ROK} />
            </ScrollView>
        </View>
    );
}

export default body;
