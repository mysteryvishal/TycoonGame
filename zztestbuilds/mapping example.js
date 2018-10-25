import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './bodyStyles';
import ProgressBar from './progressBar/progressBar'
// WU: what are all these inputs for

// WU: what is the point of the test data
// Add individual images

const money = 1000000000;

const body = () => {
    state = {
        ventures: [
            { id: 1, name: 'Company 1' }, //, value: 'orange-juice.png' 
            { id: 2, name: 'Company 2' }, //, value: 'newspaper.jpg'    
            { id: 3, name: 'Company 3' }, //, value: 'shop.png'         
            { id: 4, name: 'Company 4' }, //, value: 'mechanic.png'     
            { id: 5, name: 'Company 5' }, //, value: 'phone.png'        
            { id: 6, name: 'Company 6' }, //, value: 'film.png'         
            { id: 7, name: 'Company 7' }, //, value: 'car.png'          
            { id: 8, name: 'Company 8' }, //, value: 'hotel-company.png'
            { id: 9, name: 'Company 9' }, //, value: 'rocket.png'       
        ]
    };
    return (
        <View style={styles.itemContainer}>
            <View style={styles.bankContainer}>
                <Text style={styles.bank}>${money}</Text>
            </View>
            <ScrollView>
                {
                    this.state.ventures.map((item, index) => (
                        <View key={item.id} style={styles.item}>
                            <View style={styles.container1}>
                                <TouchableOpacity onPress={handlePress}>
                                    <View>
                                        <Image style={styles.image} source={require(('../static/shop.png'))} />
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.container2}>
                                    <Text style={styles.itemHeader}>{item.name}</Text>

                                    <ProgressBar />
                                </View>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    );
}

export default body;
