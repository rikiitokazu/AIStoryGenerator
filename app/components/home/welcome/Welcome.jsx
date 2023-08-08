import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router';
import styles from './welcome.style'

import {icons, SIZES } from '../../../constants';


const Welcome = () => {
  const router = useRouter(); 
  const [activeJobType, setActiveJobType] = useState("Full")
  return (
    <View>
      <View style={styles.container}>
        <Text style = {styles.userName}>Welcome!</Text>
        <Text style = {styles.welcomeMessage}>Read a book!</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style = {styles.searchWrapper}>
          <TextInput 
            style = {styles.searchInput}
            value = ''
            onChange ={()=> {}}
            placeholder ="Search a book..."
            />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
          <Image 
          source={icons.search}
          resizeMode = "contain"
          style = {styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

  
    </View>
  )
}

export default Welcome