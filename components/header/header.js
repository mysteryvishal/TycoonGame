import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from './headerStyles';

const header = () => {
    return (
        <View style={styles.header}>
            <StatusBar barStyle = "dark-content" hidden = {true}/>
            <Text style={styles.textHeader}>Tycoon Game</Text>
        </View>
    )
}

export default header;