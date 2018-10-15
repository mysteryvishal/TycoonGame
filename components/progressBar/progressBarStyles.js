import { StyleSheet} from 'react-native';

export default StyleSheet.create({
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
})