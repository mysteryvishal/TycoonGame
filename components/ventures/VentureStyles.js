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
    },

    button: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: '#4B994D',
        borderRadius: 10,
    },
    buttonText: {
        alignSelf: 'center',
        color: '#fff',
    },
    circle: {
        width: 80,
        marginTop: 5,
        marginHorizontal: 10, 
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#999',
    },
    pill: {
        marginTop: 5,
    },
    pillInner: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#ff8307',
        marginRight: 5,
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: 10,
    },
    whiteText: {
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
