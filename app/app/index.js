<<<<<<< HEAD
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { useState } from 'react'; 
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'


//expo-cli start --tunnel for mobile

const Home = () => {
    const router = useRouter();


    return (
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite }}>
            {/*Navigation Bar */}
            <Stack.Screen options = {{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                ),
                headerTitle: ""
            }}/>

            <ScrollView showsVerticalScrollIndicator = {false}>
                <View 
                style = {{
                    flex:1, 
                    padding:SIZES.medium
                }}>
                <Welcome 
                
                
                />
                <Popularjobs />
                <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

=======
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { useState } from 'react'; 
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { BookList, ScreenHeaderBtn, Welcome } from '../components'


//expo-cli start --tunnel for mobile

const Home = () => {
    const router = useRouter();


    return (
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite }}>
            {/*Navigation Bar */}
            <Stack.Screen options = {{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                ),
                headerTitle: ""
            }}/>

            <ScrollView showsVerticalScrollIndicator = {false}>
                <View 
                style = {{
                    flex:1, 
                    padding:SIZES.medium
                }}>
                <Welcome/>

                <BookList />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

>>>>>>> 2eb1148f844d053d2c830dec6878fd8efd7fd71c
export default Home;