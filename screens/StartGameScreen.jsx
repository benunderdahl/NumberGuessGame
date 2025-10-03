import { TextInput, View, StyleSheet } from "react-native"
import PrimaryButton from "../components/PrimaryButton"



function StartGameScreen() {
    return (
        <View style={styles.container}>
            <TextInput 
            style={ styles.input } 
            maxLength={2} 
            keyboardType="number-pad"
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.button}>
                <PrimaryButton>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 100,
        marginHorizontal: 40,
        borderRadius: 15,
        padding: 30,
        backgroundColor: '#AED6CF',
        elevation: 9,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10},
        shadowRadius: 5,
        shadowOpacity: 0.25
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    input: {
        margin: 8,
        height: 75,
        fontSize: 32,
        borderBottomColor: '#91ADC8',
        borderBottomWidth: 2,
        color: '#91ADC8',
        fontWeight: 'bold',
        width: 50
    },
    button: {
        flex:1
    }
})

export default StartGameScreen