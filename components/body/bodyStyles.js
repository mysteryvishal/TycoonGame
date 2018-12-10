import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    // Bank
    bankText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 20,
        color: 'green'
    },
    bankContainer: {
        paddingVertical: 5,
        marginBottom: 5,
    },
    // Parent Container
    itemsContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
});
