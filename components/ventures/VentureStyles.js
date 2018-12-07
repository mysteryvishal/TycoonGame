import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    image: {
        height: 80,
        width: 80,
        marginHorizontal: 10,
        resizeMode: 'contain',
        borderRadius: 10,
    },
    container2: {
        marginHorizontal: 10,
        flexDirection: 'column',
        flex: 1
    },
    itemHeader: {
        color: 'black',
        fontSize: 18,
        marginBottom: 8,
        alignSelf: 'center',
        color: '#fff'
    },

    // Progress Bar
    button: {
        backgroundColor: '#999',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 60,
        paddingVertical: 8,
        overflow: 'hidden',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        backgroundColor: 'transparent',
    },
    progress: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
});
