import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/Home/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import FlashScreen from './src/screens/FlashScreen';
import DownloadScreen from './src/screens/DownloadScreen';
import MySpaceScreen from './src/screens/MySpaceScreen';
import { NavigationContainer } from '@react-navigation/native';
import { DOWNLOAD, FLASH, HOME, MY_SPACE, SEARCH } from './src/asset/Images';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 95,
          backgroundColor: 'black',
          marginTop:0.5,
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gary',
      }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) =>
              <Image
                style={{ tintColor: focused ? 'white' : 'gray',height:30,width:25,marginTop:8 }}
                source={HOME} />,
            tabBarLabel: ({ focused }) => (<Text style={{ color: focused ? 'white' : 'gray', fontSize: 14, fontWeight: '600' }}>Home</Text>)
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen} 
          options={{
            tabBarIcon: ({ focused }) =>
              <Image
                style={{ tintColor: focused ? 'white' : 'gray',height:30,width:30,marginTop:8 }}
                source={SEARCH} />,
            tabBarLabel: ({ focused }) => (<Text style={{ color: focused ? 'white' : 'gray', fontSize: 14, fontWeight: '600' }}>Search</Text>)
          }}
          />
        <Tab.Screen
          name="New & Hot"
          component={FlashScreen} 
          options={{
            tabBarIcon: ({ focused }) =>
              <Image
                style={{ tintColor: focused ? 'white' : 'gray',height:30,width:30,marginTop:10 }}
                source={FLASH} />,
            tabBarLabel: ({ focused }) => (<Text style={{ color: focused ? 'white' : 'gray', fontSize: 14, fontWeight: '600' }}>Hot & New</Text>)
          }}
          />
        <Tab.Screen
          name="Downloads"
          component={DownloadScreen} 
          options={{
            tabBarIcon: ({ focused }) =>
              <Image
                style={{ tintColor: focused ? 'white' : 'gray',height:30,width:30,marginTop:8 }}
                source={DOWNLOAD} />,
            tabBarLabel: ({ focused }) => (<Text style={{ color: focused ? 'white' : 'gray', fontSize: 14, fontWeight: '600' }}>Downloads</Text>)
          }}
          />
        <Tab.Screen
          name="My Space"
          component={MySpaceScreen} 
          options={{
            tabBarIcon: ({ focused }) =>
              <Image
              source={MY_SPACE}
                style={{ height:30,width:30,marginTop:8,borderRadius:20,backgroundColor:'white' }}
                 />,
            tabBarLabel: ({ focused }) => (<Text style={{ color: focused ? 'white' : 'gray', fontSize: 14, fontWeight: '600' }}>My Space</Text>)
          }}
          />
      </Tab.Navigator>
    </NavigationContainer >
  )
}

export default App

const styles = StyleSheet.create({})