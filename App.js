import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
  <LinearGradient colors={['#F2EDD1', '#F9CB99', '#689B8A', '#280A3E']} style={styles.container}>
    <ImageBackground 
    source={require('./assets/images/question.jpg')}
    resizeMode='cover'
    style={styles.container}
    imageStyle={styles.background}
    >
      <StartGameScreen />
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
