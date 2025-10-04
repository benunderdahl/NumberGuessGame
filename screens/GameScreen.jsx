import { useState, useEffect } from "react"
import {View, Text, StyleSheet, Alert } from "react-native"
import Title from "../components/Title"
import GameText from "../components/GameText"
import PrimaryButton from "../components/PrimaryButton"

function generateRandomNumber(min, max, exclude) {
        const rand = Math.floor(Math.random() * (max - min)) + min
        if (rand === exclude) {
            return generateRandomNumber(min, max, exclude)
        } else {
            return rand
        }
    }
let minBoundary = 1
let maxBoundary = 100

function GameScreen({userNum, onGameOver}) {
    const initialGuess = generateRandomNumber(1, 100, userNum)
    const [compGuess, setCompGuess] = useState(initialGuess)
    useEffect(() => {
        if (compGuess === userNum) {
            onGameOver()
        }
    }, [compGuess, userNum, onGameOver])
    function nextGuessHandler(direction) {
        if ((direction === "lower" && compGuess < userNum) || 
        (direction === "greater" && compGuess > userNum)) {
            Alert.alert("Misleading info ","Bad Boy", [{text: "Ok", style: 'cancel'}])
        }
        else if (direction === "lower")  {
            maxBoundary = compGuess
        } else {
           minBoundary = compGuess + 1
        }
        const newRand = generateRandomNumber(minBoundary, maxBoundary, compGuess)
        setCompGuess(newRand)
    }
    return <View style={styles.container}>
        <Title>Opponent's Guess</Title>
        <GameText>{compGuess}</GameText>
        <View>
            <Text style={styles.text}>Higher or Lower</Text>
        </View>
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")} style={styles.button}>+</PrimaryButton>
            </View>
            <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")} style={styles.button}>-</PrimaryButton>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        flex: 1,
        padding: 30,
    },
    text: {
        textAlign: "center",
        marginTop: 10,
        fontWeight: "900",
        fontSize: 20
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 4,
    },
    button: {
        width: 100,
        marginHorizontal: 10,
    }
    
})


export default GameScreen