import { Text, View, StyleSheet } from "react-native"



function GameText({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: 'Black',
        padding: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: "center"
    },
    text: {
        color: 'Blue',
        fontWeight: "bold",
        fontSize: 24,
        fontFamily: 'open-sans-condensed'
    }
})

export default GameText