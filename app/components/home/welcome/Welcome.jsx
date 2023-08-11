import React from 'react'
import { View, Text } from 'react-native'
import styles from './welcome.style'




const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style = {styles.header}>Welcome back!</Text>
        <Text style = {styles.welcomeMessage}>Read from any of these books with captivating illustrations!</Text>
        <Text style = {styles.description}>Programmed with Open-AI and MeaningfulCloud</Text>
      </View>
    </View>
  )
}

export default Welcome