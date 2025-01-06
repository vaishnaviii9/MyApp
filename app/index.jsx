import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import icedCoffeeImg from '@/assets/images/iced-coffee.png'
import { Link } from 'expo-router'
const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeeImg}
        resizeMode='cover'
        style={styles.image}
      >
        <Text style={styles.title}>Coffee Shop</Text>

        <Link href="/menu" style={{marginHorizontal: "auto"}} asChild>
          <Pressable style={styles.button}>
            <Text style ={styles.buttonText}>
              Menu
            </Text>
          </Pressable>
        </Link>
        
        <Link href="/contact" style={{marginHorizontal: "auto"}} asChild>
          <Pressable style={styles.button}>
            <Text style ={styles.buttonText}>
              Contact Us
            </Text>
          </Pressable>
        </Link>
        

      </ImageBackground>
    </View>
  )
}


export default app

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#f8f8f8',
    },
    image: {
      width: '100%',
      height: '100%',
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      color: 'white',
      fontSize: 48,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: 'rgba(0,0,0,0.6)',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      marginBottom: 100,
    },
    link: {
      color: 'white',
      fontSize: 43,
      fontWeight: 'bold',
      textAlign: 'center',
      textDecorationLine: 'underline',
      padding: 4,
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    button: {
      height: 60,
      width:150,
      borderRadius: 30,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.75)',
      paddingHorizontal: 20,
      marginVertical: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
      marginBottom:50,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    }
  }
)