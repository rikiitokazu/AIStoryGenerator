import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, Image } from 'react-native'

import styles from './bookcontent.style'
import axios from 'axios'
import {icons} from '../../constants'

import { checkImageURL } from '../../utils'
import { COLORS, SIZES } from '../../constants'

const BookContent = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); 
  const [story, setStory] = useState([]);
  const [image, setImage] = useState('');

 //iOS use ngrok
 //web just use localhost:4000
  
  const test = async () => {
    if (data) {
      const len = data.story.length
      //if i is less than two, we have to do something about it
      for (let i = 2; i < len; i+=11) {
        try{
          const response = await axios.post(`https://c27b-23-242-185-233.ngrok-free.app/summarizer`, {desc: data.story[i]})
          console.log(response.data.summary)
          const picResponse = await axios.post(`https://c27b-23-242-185-233.ngrok-free.app/testing`, {msg: response.data.summary})
          data.story.splice(i+1, 0, picResponse.data.photo)
          setImage(picResponse.data.photo)
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
        
        catch (error) {
          console.log(error); 
          setError(error);
        } 
      }
      //do a for loop of every 3 or so elements of the list
      setStory(data.story)
      setIsLoading(false);
      console.log(data.story);
    }

  }

  useEffect(() => {
     test();
  }, [data])
  

  //style for pictures style = {styles.pictureContainer}
  return (
    <View style = {styles.container}>
        {data && !isLoading ? (
          <View>
          <View style = {styles.jobTitleBox}>
          <Text style = {styles.title}>{data.title}</Text>
          <Text style = {styles.companyName}>By: {data.author}</Text>
          </View>
          <View>
            {data.story.map((paragraph, index) => (
              <View  key = {index}>
                {paragraph.startsWith('https://') ? (
                <Image
                  source={{ uri: paragraph }}
                  style = {styles.generatedImage}
                  resizeMode='contain'
                />)  : (
                <Text style = {styles.content}>{paragraph}</Text>
                 )}
              </View>
            ))}
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

export default BookContent