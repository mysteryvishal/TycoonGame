import React from 'react';
import { View, Text, ScrollView, AsyncStorage, TouchableOpacity } from 'react-native';
import styles from './BodyStyles';
import Venture from '../ventures/Venture';
import Assets from '../ventures/Assets';
// WU: what are all these inputs for
// WU: what is the point of the test data
// this works when money is a string but not when it is a integer.. need to find a new way around this..

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
                <Text style={styles.bank}>$ {}</Text>
            </View>

            <ScrollView>
                <Venture asset={Assets.OJS} />
                <Venture asset={Assets.NPS} />
                {/* Other Ventures
                <Venture asset={Assets.SHP} />
                <Venture asset={Assets.MEC} />
                <Venture asset={Assets.HTC} />
                <Venture asset={Assets.FLM} />
                <Venture asset={Assets.ROK} />
                */}
            </ScrollView>
        </View>
    );
}

export default body;
