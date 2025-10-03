import { useState } from "react"
import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from "./screens/GameScreen"

export default function App() {
  const [userNumber, setUserNumber] = useState()
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
    console.log(pickedNumber)
  }
  let screen = <StartGameScreen onPick={pickedNumberHandler}/>
  if (userNumber) {
    screen = <GameScreen />
  }
  return (
  <LinearGradient colors={['#F2EDD1', '#F9CB99', '#689B8A', '#280A3E']} style={styles.container}>
    <ImageBackground 
    source={require('./assets/images/question.jpg')}
    resizeMode='cover'
    style={styles.container}
    imageStyle={styles.background}
    >
      {screen}
    </ImageBackground>
  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  background: {
    opacity: 0.15
  }
});
