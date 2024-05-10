<<<<<<< HEAD
import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router';
import styles from './welcome.style'

import {icons, SIZES } from '../../../constants';

const jobTypes = ["Full", "Part", "Contractor"]
const Welcome = () => {
  const router = useRouter(); 

  return (
    <View>
      <View style={styles.container}>
        <Text style = {styles.userName}>Hello...</Text>
        <Text style = {styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style = {styles.searchWrapper}>
          <TextInput 
            style = {styles.searchInput}
            value = ""
            onChange ={()=> {}}
            placeholder ="What are you looking for"
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

      <View style = {styles.tabsContainer}>
          <FlatList 
          data ={jobTypes}
          renderItem={({ item }) => {
            <TouchableOpacity>
              <Text>{item}</Text>
            </TouchableOpacity>
          }}
        />
      </View>

    </View>
  )
}

=======
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

>>>>>>> 2eb1148f844d053d2c830dec6878fd8efd7fd71c
export default Welcome