import React from 'react';
import { View, Text, ScrollView, AsyncStorage } from 'react-native';
import styles from './bodyStyles';
import Venture from '../ventures/venture';
import Assets from '../ventures/assets';
// WU: what are all these inputs for
// WU: what is the point of the test data

const body = () => {
    return (
        <View style={styles.itemsContainer}>
            <View style={styles.bankContainer}>
                <Text style={styles.bank}>$ {Assets.Money}</Text>
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
