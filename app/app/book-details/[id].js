import {Text, View, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl} from 'react-native';

import { Stack, useRouter, useGlobalSearchParams } from 'expo-router';
import { useCallback, useState, useEffect } from 'react';
import axios from 'axios'

import { BookContent, ScreenHeaderBtn } from '../../components'
import { COLORS, icons, SIZES } from '../../constants'





const JobDetails = () => {
    const params = useGlobalSearchParams();
    //gets specific book id


    const router = useRouter();
    
    const [refreshing, setRefreshing] = useState(false); 

    const onRefresh = () => {}

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([])
    const [error, setErorr] = useState(null)

    //iOS use ngrok
    //web just use http://localhost:4000

    const fetchData = async () => {
        setLoading(true); 
        if (params !== undefined) {
            try{
                const response = await axios.get(`https://4ab9-23-242-185-233.ngrok-free.app/books/ids/${params.id}`);
                setData(response.data)
                setLoading(false)
    
            } catch(error) {
                setErorr(error)
            } finally {
                setLoading(false);
            }
        }

    }

    useEffect(() => {
        fetchData();
    },[params])

    //safeareaview allows all content to fit in screen
    return (  
        <SafeAreaView style = {{ flex: 1, backgroundColor: COLORS.lightWhite}}>
        <Stack.Screen options = {{
            headerStyle: { backgroundColor: COLORS.lightWhite},
            headerShadowVisible: false,
            headerBackVisible: false,
            headerLeft: () => (
                <ScreenHeaderBtn 
                    iconUrl = {icons.left}
                    dimension = "60%"
                    handlePress = {() => router.push('/')}
                />
            ),
            headerRight: () => (
                <ScreenHeaderBtn 
                    iconUrl = {icons.share}
                    dimension = "60%"
                    handlePress = {() => router.push('/')}
                />
            ),
            headerTitle: ''
        }} />

        <>
            <ScrollView showsVerticalScrollIndicator={false} refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh = {onRefresh} />
            }>
                {loading ?  (
                    <ActivityIndicator size = "large" color = {COLORS.primary} />
                ): error ? (
                <Text>Something went wrong</Text>
                ): (params.id !== undefined)? (
                    <View style = {{ padding:SIZES.medium, paddingBottom: 100 }}>
                        <BookContent
                            data = {data[0]}
                        
                        />
                    </View>
                ): (
                    <Text>Error</Text>
                )}
                
            </ScrollView>
        </>
    </SafeAreaView>
    );
}
 
export default JobDetails;