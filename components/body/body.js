import React from 'react';
import { View, Text, Image, FlatList, ScrollView, ProgressBarAndroid, TouchableOpacity } from 'react-native';
import styles from './bodyStyles';
import ProgressBar from '../progressBar/progressBar'
// WU: what are all these inputs for

// WU: what is the point of the test data
// Add individual images
const testData = [
    { key: 'Company 1', value: 'orange-juice.png' },
    { key: 'Company 2', value: 'newspaper.jpg' },
    { key: 'Company 3', value: 'shop.png' },
    { key: 'Company 4', value: 'mechanic.png' },
    { key: 'Company 5', value: 'phone.png' },
    { key: 'Company 6', value: 'film.png' },
    { key: 'Company 7', value: 'car.png' },
    { key: 'Company 8', value: 'hotel-company.png' },
    { key: 'Company 9', value: 'rocket.png' },
];

const money = 1000000000;

const body = () => {
    
    return (
        <View style={styles.itemContainer}>
            <View style={styles.bankContainer}>
                <Text style={styles.bank}>${money}</Text>
            </View>
            <ScrollView>
                {/* WU: Why did I use a flatlist?? */}
                {/* not displaying all items */}
                <FlatList
                    data={testData}
                    renderItem={({ item }) =>

                        <View style={styles.item}>

                            <View style={styles.container1}>
                                <TouchableOpacity onPress={handlePress}>
                                    <View>
                                        <Image style={styles.image} source={require('../static/mechanic.png')} />
                                        {/*('../static/' + (item.value))*/}
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.container2}>
                                    <Text style={styles.itemHeader}>{item.key}</Text>

                                    <ProgressBar />
                                </View>
                            </View>
                        </View>
                    }
                />
            </ScrollView>
        </View>
    );
}

export default body;
