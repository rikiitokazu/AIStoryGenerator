import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './bookcard.style'


const BookCard = ({ book, handleNavigate }) => {
  return (
    <TouchableOpacity 
      style = {styles.container}
      onPress = {handleNavigate}
    >
      <TouchableOpacity style = {styles.logoContainer}>

      </TouchableOpacity>


        <View style = {styles.textContainer}>
          <Text style = {styles.jobName} numberOfLines={1}>
            {book.title}
          </Text>
          <View style = {styles.description_container}>
          <Text style = {styles.jobType}>{book.author}</Text>
          <Text>Word Count: {book.word_count}</Text>
          </View>
        </View>

    </TouchableOpacity>
  )
}

