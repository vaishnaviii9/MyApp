import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'

const explore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coffee Shop</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>Store Name: Java Coffee House</Text>
        <Text style={styles.info}>Address: 123 Coffee St, Bean Town</Text>
        <Text style={styles.info}>Store Hours: 7:00 AM - 8:00 PM</Text>
      </View>
      <Text style={styles.text}>Welcome to Java Coffee House!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6b4f4f',
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
    width: '90%',
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  text: {
    color: '#6b4f4f',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 15,
    borderRadius: 10,
    width: '90%',
  }
})

export default explore