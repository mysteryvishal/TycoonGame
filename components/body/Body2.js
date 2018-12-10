import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native';
import styles from './BodyStyles';
import Venture from '../ventures/Venture2';

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
    }

    getMoney = () => {
        money = AsyncStorage.getItem('money')
        return money
    }

    async getVentures(key) {
        try {
            let ventures = await AsyncStorage.getItem('ventures');
            const items = JSON.parse(ventures);
            x = items[key]
            return x
            //alert(items.OJS.name) this works but I need to replace OJS with a key that I will pass in so it passes in an all the properties
        }
        catch (error) {
            alert(error)
        }
    }
    
    async retrieveItem(key) {
        try {
          const retrievedItem =  await AsyncStorage.getItem(key);
          const item = JSON.parse(retrievedItem);
          return item;
        } catch (error) {
          console.log(error.message);
        }
        return
    }

    render() {
        return(
            <View style={styles.itemsContainer}>
                <View style={styles.bankContainer}>
                    <Text style={styles.bankText}>$ {this.getMoney}</Text>
                </View>
                <TouchableOpacity onPress={() => this.getVentures('OJS') }>
                    <Text>Hello</Text>
                </TouchableOpacity>
                <ScrollView>
                    <Venture asset={() => this.getVentures('OJS')} />
                    {/*
                    <Venture asset={} />
                    */}
                </ScrollView>
            </View>
        );
    }
}