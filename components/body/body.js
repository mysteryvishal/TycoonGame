import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './bodyStyles';
import Venture from '../ventures/venture';
import Assets from '../ventures/assets';
// WU: what are all these inputs for

// WU: what is the point of the test data
// Add individual images

const body = () => {
    return (
        <View style={styles.itemsContainer}>
            <View style={styles.bankContainer}>
                <Text style={styles.bank}>${Assets.Money}</Text>
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
