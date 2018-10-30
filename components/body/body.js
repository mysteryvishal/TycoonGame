import React from 'react';
import { View, Text, ScrollView, AsyncStorage, TouchableOpacity } from 'react-native';
import styles from './bodyStyles';
import Venture from '../ventures/venture';
import Assets from '../ventures/assets';
// WU: what are all these inputs for
// WU: what is the point of the test data

let money = 0;
// this works when money is a string but not when it is a integer.. need to find a new way around this..
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

displayData = async () => {
    try {
        let money = await AsyncStorage.getItem('money');
        alert(money)
    }
    catch (error) {
        alert(error)
    }
    
}

const body = () => {
    AsyncStorage.setItem('money', money);
    
    AsyncStorage.setItem('ventures', JSON.stringify(ventures));
    return (
        <View style={styles.itemsContainer}>
            <View style={styles.bankContainer}>
                <Text style={styles.bank}>$ {Assets.Money}</Text>
            </View>
            
            <TouchableOpacity onPress={this.displayData}><Text>disp</Text></TouchableOpacity>

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
