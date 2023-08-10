import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './bookcard.style'
import {images} from '../../../constants'

const BookCard = ({ book, handleNavigate }) => {
  return (
    <TouchableOpacity 
      style = {styles.container}
      onPress = {handleNavigate}
    >
      <TouchableOpacity style = {styles.logoContainer}>
        <Image 
        source = {images.bookIcon} 
        resizeMode = "contain"
        style = {styles.logoImage}
        />
      </TouchableOpacity>


        <View style = {styles.textContainer}>
          <Text style = {styles.title} numberOfLines={1}>
            {book.title}
          </Text>
          <View style = {styles.description_container}>
            <Text style = {styles.author}>{book.author}</Text>
            <Text style = {styles.wordCount}>Word Count: {book.word_count}</Text>
          </View>
        </View>

    </TouchableOpacity>
  )
}

export default BookCard