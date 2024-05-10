<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

import styles from './bookcontent.style'
import axios from 'axios'
import {icons} from '../../constants'

import { checkImageURL } from '../../utils'
import { COLORS, SIZES } from '../../constants'

const BookContent = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); 
  const test = async () => {
    if (data) {
      const len = data.story.length
      //if i is less than two, we have to do something about it
      for (let i = 2; i < len; i+=4) {
        try{
          const response = await axios.post(`https://3ad8-23-242-185-233.ngrok-free.app/summarizer`, {desc: data.story[i]})
          console.log(response)
          console.log(response.data.summary)
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
        
        catch (error) {
          console.log(error); 
          setError(error);
        } 
      }
      //do a for loop of every 3 or so elements of the list
      setIsLoading(false);
    }
  }
  useEffect(() => {
    test();
  }, [data])

  return (
    <View style = {styles.container}>
        {data && !isLoading ? (
      <View>
      <View style = {styles.jobTitleBox}>
      <Text style = {styles.title}>{data.title}</Text>
      <Text style = {styles.companyName}>By: {data.author}</Text>
      </View>
      <View>
        <Text>{data.story?.map((paragraph, index) => (
          <View key = {index}>
            <Text style = {styles.content}>{paragraph}</Text>
          </View>
        ))}</Text>
      </View>
      </View>
        ) : (
          error ? (
            <Text>Something went wrong</Text>
          ) : (<ActivityIndicator size='large' color={COLORS.primary} />)
        )}

    </View>
  )
}

=======
import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, Image } from 'react-native'

import styles from './bookcontent.style'
import axios from 'axios'

import { COLORS } from '../../constants'

const BookContent = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); 

 //iOS use ngrok
 //web just use http://localhost:4000
  
  const fetchData = async () => {
    if (data) {
      const len = data.story.length
      //if i is less than two, we have to do something about it
      for (let i = 2; i < len; i+=4) {
        try{
          const response = await axios.post(`https://4ab9-23-242-185-233.ngrok-free.app/summarizer`, {desc: data.story[i]})
          console.log(response.data.summary)
          const picResponse = await axios.post(`https://4ab9-23-242-185-233.ngrok-free.app/picture`, {msg: response.data.summary})
          data.story.splice(i+1, 0, picResponse.data.photo)
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
        
        catch (error) {
          console.log(error); 
          setError(error);
        } 
      }
      setIsLoading(false);
      console.log(data.story);
    }

  }

  useEffect(() => {
     fetchData();
  }, [data])
  

  //style for pictures style = {styles.pictureContainer}
  return (
    <View style = {styles.container}>
        {data && !isLoading ? (
          <View>

            <Text style = {styles.title}>{data.title}</Text>
            <Text style = {styles.author}>By: {data.author}</Text>

            <View style = {styles.bookDescription}>
              <Text style = {styles.estimatedTime}>Est. Reading time: {Math.round(data.word_count/200)} minutes </Text>
              <Text style = {styles.difficulty}>Difficulty: {data.difficulty}</Text>
            </View>

          <View>
            {data.story.map((paragraph, index) => (
              <View style = {styles.pictureContainer} key = {index}>
                {paragraph.startsWith('https://') ? (
                
                  <Image
                    source={{ uri: paragraph }}
                    style = {styles.generatedImage}
                    resizeMode='stretch'
                  />
                )  : (
                <Text style = {styles.content}>{paragraph}</Text>
                 )}
              </View>
            ))}
          </View>
          </View>
        ) : (
          error ? (
            <Text>Something went wrong</Text>
          ) : (<View>
                <Text style = {styles.generating}>Generating Images....</Text>
                <ActivityIndicator size='large' color={COLORS.primary} />
            </View>)
        )}

    </View>
  )
}

>>>>>>> 2eb1148f844d053d2c830dec6878fd8efd7fd71c
export default BookContent