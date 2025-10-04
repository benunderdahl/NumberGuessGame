import { View, Text, StyleSheet } from 'react-native'
function GuessLogItem({roundNumber, guess}) {
    return <View style={styles.list}>
        <Text style={styles.text}>#{roundNumber}</Text>
        <Text style={styles.text}>Opps Guess: {guess}</Text>
    </View>
}

const styles = StyleSheet.create({
    list: {
        heigth: 10,
        borderRadius: 40,
        padding: 10,
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 3,
        shadowColor: 'black',
        shadowOffset: {width: 0, heigth: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3
    },
    text: {
        fontFamily: 'open-sans-condensed'
    }
})

export default GuessLogItem