import { useState, useEffect } from "react"
import {View, Text, StyleSheet, Alert, FlatList } from "react-native"
import Title from "../components/Title"
import GameText from "../components/GameText"
import PrimaryButton from "../components/PrimaryButton"
import  Ionicons  from '@expo/vector-icons/Ionicons'
import GuessLogItem from "../components/GuessLogItem"

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
    const [guessRounds, setGuessRounds] = useState([initialGuess])
   
    useEffect(() => {
        if (compGuess === userNum) {
            onGameOver()
        }
    }, [compGuess, userNum, onGameOver])
    useEffect(() =>  {
    minBoundary = 1
    maxBoundary = 100
    }, [])
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
        setGuessRounds(prev => [...prev, newRand])
    }
    const guessRoundsLength = guessRounds.length
    return <View style={styles.container}>
        <Title>Opponent's Guess</Title>
        <GameText>{compGuess}</GameText>
        <View>
            <Text style={styles.text}>Higher or Lower</Text>
        </View>
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")} style={styles.button}>
                <Ionicons name="remove" size={24}/>
            </PrimaryButton>
            </View>
            <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")} style={styles.button}>
                <Ionicons name="add" size={24}/>
            </PrimaryButton>
            </View>
        </View>
        <View style={styles.flatListContainer}>
        <FlatList data={guessRounds} renderItem={(itemData) => {
            return <GuessLogItem roundNumber={guessRoundsLength - itemData.index} guess={itemData.item}/>
        }} keyExtractor={(item) => item }/>
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
    },
    flatListContainer: {
        flex: 1,
        padding: 15,
        borderWidth: 1,
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,

    },
    textContainer: {
        justifyContent: 'center',
        textAlign: 'center'
    }
    
})


export default GameScreen