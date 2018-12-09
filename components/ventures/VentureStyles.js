import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    item: {
        backgroundColor: '#FFC107',
        alignSelf: 'stretch',
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
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
    },
    itemHeader: {
        color: 'black',
        fontSize: 18,
        marginBottom: 8,
        alignSelf: 'center',
        color: '#fff'
    },

    // Progress Bar
    progressBar: {
        backgroundColor: '#999',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 60,
        paddingVertical: 8,
        overflow: 'hidden',
    },
    progressBarText: {
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
