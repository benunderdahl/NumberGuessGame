import { Text, StyleSheet } from "react-native"

function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: "center",
        color: '#45928154',
        borderWidth: 2, 
        borderColor: '#45928154',
        margin: 20,
        padding: 20
    }
})

export default Title