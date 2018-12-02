import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    // Main Body
    body: {// this isnt used
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        backgroundColor: '#FFD54F',
    },
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
    // Unused styles... till end
    itemHeader: {
        color: 'black',
        fontSize: 18,
        marginBottom: 8,
        alignSelf: 'center',
        color: '#fff'
    },
    
    item: {
        backgroundColor: '#FFC107',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'stretch',
        marginVertical: 10,
        paddingVertical: 10,
    },
    
    container1: {
        flex: 1,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    container2: {
        marginHorizontal: 10,
        flexDirection: 'column',
        flex: 1
    },
    image: {
        height: 80,
        width: 80,
        marginHorizontal: 10,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    // Progress Bar
    progressBar: {
        paddingVertical: 10,
    }
});
