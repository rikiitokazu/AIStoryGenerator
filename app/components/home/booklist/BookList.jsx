<<<<<<< HEAD
import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import axios from 'axios'; 

import styles from './booklist.style'
import { useRouter } from 'expo-router'; 
import { COLORS, SIZES } from '../../../constants';
import BookCard from '../../common/cards/BookCard';


const jobTypes = ["All", "Fiction", "Non-Fiction", "Fantasy", "Adventure"]

const BookList = () => {
  const router = useRouter();
  const [bookData, setBookData] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [activeJobType, setActiveJobType] = useState("All")

  
  const getData = async (genre) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://3ad8-23-242-185-233.ngrok-free.app/books/genre/${genre}`)
      
      setBookData(response.data)
      setIsLoading(false); 
    }
    catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }


  useEffect(() => {
    getData(activeJobType)
  }, [activeJobType])


  return (
    <View style = {styles.container}>

      <View style = {styles.tabsContainer}>
          <FlatList 
          data ={jobTypes}
          renderItem={({ item }) => {
            return (
            <TouchableOpacity style = {styles.tab(activeJobType, item)}
            onPress = {() => {
              setActiveJobType(item);
              
              //router.push(`/search/${item}`)
            }}>
              <Text style = {styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
            )
          }}
          keyExtractor={item => item}
          contentContainerStyle = {{ columnGap:SIZES.small}}
          horizontal
        />
      </View>
      
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <View>
            <Text>Something went wrong</Text>
          </View>
        ) : (
          bookData?.map((book) => (
            <BookCard
              book={book}
              key = {book._id}
              handleNavigate={() => router.push(`/book-details/${book._id}`)}
            />
          ))
        )}
      </View>
    </View>
  )
}

=======
import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList, Image } from 'react-native'
import axios from 'axios'; 

import styles from './booklist.style'
import { useRouter } from 'expo-router'; 
import { COLORS, SIZES } from '../../../constants';
import BookCard from '../../common/cards/BookCard';


const genres = ["All", "Fiction", "Non-Fiction", "Fantasy", "Adventure", "Mystery", "Romance", "Sci-Fi", "Self-help", "Humor"]

const BookList = () => {
  const router = useRouter();
  const [bookData, setBookData] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  //default state
  const [activeGenre, setActiveGenre] = useState("All")

 //iOS use ngrok
 //web just use http://localhost:4000

 
  const getData = async (genre) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://4ab9-23-242-185-233.ngrok-free.app/books/genre/${genre}`)
      setBookData(response.data)
      setIsLoading(false); 
    }
    catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }


  useEffect(() => {
    getData(activeGenre)
  }, [activeGenre])


  return (
    <View style = {styles.container}>

      <View style = {styles.tabsContainer}>
          <FlatList 
          data ={genres}
          renderItem={({ item }) => {
            return (
            <TouchableOpacity style = {styles.tab(activeGenre, item)}
            onPress = {() => {
              setActiveGenre(item);
            }}>
              <Text style = {styles.tabText(activeGenre, item)}>{item}</Text>
            </TouchableOpacity>
            )
          }}
          keyExtractor={item => item}
          contentContainerStyle = {{ columnGap:SIZES.small}}
          horizontal
        />
      </View>
      
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Books unavailable</Text>
        ) : (
          bookData?.map((book) => (
            <BookCard
              book={book}
              key = {book._id}
              handleNavigate={() => router.push(`/book-details/${book._id}`)}
            />
          ))
        )}
      </View>
        
    </View>
  )
}

>>>>>>> 2eb1148f844d053d2c830dec6878fd8efd7fd71c
export default BookList;