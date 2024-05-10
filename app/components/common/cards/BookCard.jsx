<<<<<<< HEAD
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

=======
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

>>>>>>> 2eb1148f844d053d2c830dec6878fd8efd7fd71c
export default BookCard