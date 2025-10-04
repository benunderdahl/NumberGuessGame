import {View, Image, StyleSheet, Text} from "react-native"
import Title from "../components/Title"
import PrimaryButton from "../components/PrimaryButton"
function GameOverScreen({rounds, userNum, onRestart}) {
    return <View style={styles.container}>
    <Title>Game Over</Title>
    <View style={styles.imageContainer}>
    <Image style={styles.image} source={require("../assets/images/gameover.jpg")}/>
    </View>
    <Text style={styles.summary}>Your phone needed 
        <Text style={styles.highlight}> {rounds} </Text> 
        rounds to guess the number 
        <Text style={styles.highlight}> {userNum} </Text></Text>
        <PrimaryButton onPress={onRestart}>Start new game?</PrimaryButton>
    </View> 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        opacity: .45,
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        borderRadius: 200,
        width: 400,
        height: 400,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        margin: 30
    },
    highlight: {
        color: 'rgba(69, 221, 69, 1)'
    },
    summary: {
        fontFamily: 'open-sans-condensed',
        textAlign: 'center',
        margin: 20,
    }
})

export default GameOverScreen