import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from './bodyStyles';
import { ProgressBar } from '../progressBar/progressBar'
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

                <View style={styles.item}>
                    <View style={styles.container1}>
                        <TouchableOpacity onPress={handlePress} >
                            <View>
                                <Image style={styles.image} source={require('../static/orange-juice.png')} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.container2}>
                            <Text style={styles.itemHeader}>Orange Juice Stand</Text>
                            {/*<OrangeJuice.progressBar />*/}
                            <ProgressBar />
                        </View>
                    </View>
                </View>

                <View style={styles.item}>
                    <View style={styles.container1}>
                        <TouchableOpacity onPress={handlePress}>
                            <View>
                                <Image style={styles.image} source={require('../static/newspaper.jpg')} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.container2}>
                            <Text style={styles.itemHeader}>Newspaper Stand</Text>
                            <ProgressBar />
                        </View>
                    </View>
                </View>

                <View style={styles.item}>
                    <View style={styles.container1}>
                        <TouchableOpacity onPress={handlePress}>
                            <View>
                                <Image style={styles.image} source={require('../static/shop.png')} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.container2}>
                            <Text style={styles.itemHeader}>Shop</Text>
                            <ProgressBar />
                        </View>
                    </View>
                </View>

                <View style={styles.item}>
                    <View style={styles.container1}>
                        <TouchableOpacity onPress={handlePress}>
                            <View>
                                <Image style={styles.image} source={require('../static/mechanic.png')} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.container2}>
                            <Text style={styles.itemHeader}>Mechanic</Text>
                            <ProgressBar />
                        </View>
                    </View>
                </View>

                <View style={styles.item}>
                    <View style={styles.container1}>
                        <TouchableOpacity onPress={handlePress}>
                            <View>
                                <Image style={styles.image} source={require('../static/phone.png')} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.container2}>
                            <Text style={styles.itemHeader}>Phone Company</Text>
                            <ProgressBar />
                        </View>
                    </View>
                </View>

                <View style={styles.item}>
                    <View style={styles.container1}>
                        <TouchableOpacity onPress={handlePress}>
                            <View>
                                <Image style={styles.image} source={require('../static/film.png')} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.container2}>
                            <Text style={styles.itemHeader}>Film Studio</Text>
                            <ProgressBar />
                        </View>
                    </View>
                </View>

                <View style={styles.item}>
                    <View style={styles.container1}>
                        <TouchableOpacity onPress={handlePress}>
                            <View>
                                <Image style={styles.image} source={require('../static/car.png')} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.container2}>
                            <Text style={styles.itemHeader}>Car Company</Text>
                            <ProgressBar />
                        </View>
                    </View>
                </View>

                <View style={styles.item}>
                    <View style={styles.container1}>
                        <TouchableOpacity onPress={handlePress}>
                            <View>
                                <Image style={styles.image} source={require('../static/hotel-company.png')} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.container2}>
                            <Text style={styles.itemHeader}>Hotel</Text>
                            <ProgressBar />
                        </View>
                    </View>
                </View>

                <View style={styles.item}>
                    <View style={styles.container1}>
                        <TouchableOpacity onPress={handlePress}>
                            <View>
                                <Image style={styles.image} source={require('../static/rocket.png')} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.container2}>
                            <Text style={styles.itemHeader}>Rocket Company</Text>
                            <ProgressBar />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default body;
