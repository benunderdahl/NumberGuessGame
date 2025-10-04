import { useState } from "react"
import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from "./screens/GameScreen"
import GameOverScreen from "./screens/GameOverScreen"
import { useFonts } from 'expo-font'
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [gameOver, setGameOver] = useState()

  const [fontsLoaded] = useFonts({
    "open-sans-condensed": require("./assets/fonts/OpenSansCondensed_700Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
    setGameOver(false)
    console.log(pickedNumber)
  }
  function gameOverHandler() {
    setGameOver(true)
  }
  let screen = <StartGameScreen onPick={pickedNumberHandler}/>
  if (userNumber) {
    screen = <GameScreen userNum={userNumber} onGameOver={gameOverHandler}/>
  }
  if (gameOver) {
    screen = <GameOverScreen />
  }
  return (
  <LinearGradient colors={['#F2EDD1', '#F9CB99', '#689B8A', '#280A3E']} style={styles.container}>
    <ImageBackground 
    source={require('./assets/images/question.jpg')}
    resizeMode='cover'
    style={styles.container}
    imageStyle={styles.background}
    >
      <SafeAreaView style={styles.container}>
      {screen}
      </SafeAreaView>
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
