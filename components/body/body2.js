import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './bodyStyles';
import Venture from '../ventures/venture';
import Assets from '../ventures/assets';
// WU: what are all these inputs for

// WU: what is the point of the test data
// Add individual images

const money = 1000000000;

const body = () => {
    return (
        <View style={styles.itemsContainer}>
            <View style={styles.bankContainer}>
                <Text style={styles.bank}>${money}</Text>
            </View>
            <ScrollView>

                <Venture asset={Assets.OJS} />
                <Venture asset={Assets.NPS} />
                <Venture asset={Assets.MEC} />
            </ScrollView>
        </View>
    );
}

export default body;
