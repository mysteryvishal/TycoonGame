import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './bodyStyles';
import Venture from '../ventures/venture2';
import Assets from '../ventures/assets';
import { ProgressBar } from '../../zztestbuilds/progressBar1'
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
                <View style={styles.item}>
                    <View style={styles.container1}>
                        <TouchableOpacity onPress={handlePress} >
                            <View>
                                <Image style={styles.image} source={require('../static/orange-juice.png')} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.container2}>
                            <Text style={styles.itemHeader}>Orange Juice Stand</Text>
                            <ProgressBar />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default body;
