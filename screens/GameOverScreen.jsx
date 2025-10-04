import {View, Image, StyleSheet} from "react-native"
import Title from "../components/Title"
function GameOverScreen() {
    return <View style={styles.container}>
    <Title>Game Over</Title>
    <View style={styles.imageContainer}>
    <Image style={styles.image} source={require("../assets/images/gameover.jpg")}/>
    </View>
    </View> 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        opacity: 15,
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 200,
        width: 400,
        height: 400,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        margin: 30
    }
})

export default GameOverScreen