import { Pressable, View, Text, StyleSheet } from 'react-native'


function PrimaryButton({children}) {
    function pressHandler() {
        console.log("pressed")
    }
    return <View style={styles.outerContainer}>
        <Pressable onPress={pressHandler} style={({pressed}) => pressed ? 
        [styles.ios, styles.innerContainer] : styles.innerContainer
    } android_ripple={{color: '#1cb9b9b2'}}
                >
        <Text style={styles.text}>{children}</Text>
        </Pressable>
     </View>
}

const styles = StyleSheet.create({
    innerContainer: {
        backgroundColor: '#6edac8b2',
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    text: {
        color: 'white',
        textAlign: 'center'
    }, 
    outerContainer: {
        borderRadius: 30,
        margin: 5,
        elevation: 2,
    },
    ios: {
        opacity: 0.75,

    }
})

export default PrimaryButton