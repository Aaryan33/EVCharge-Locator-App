import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import FavoriteScreen from '../Screen/FavoriteScreen/FavoriteScreen';
import ProfileScreen from '../Screen/ProfileScreen/ProfileScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Colors from '../Utils/Colors';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false     // don't show header name
    }}>
        <Tab.Screen name='home' 
        component={HomeScreen}
        options={{
          tabBarLabel:'Search',   // bottom lable
          tabBarActiveTintColor:Colors.PRIMARY,
          tabBarIcon: ({color, size}) => (      // bottom label size and color
            <Ionicons name="search" size={size} color={color} />     // icons.expo
          )
        }} />

        <Tab.Screen name='favorite' 
        component={FavoriteScreen}
        options={{
          tabBarLabel:'Favorite',   // bottom lable
          tabBarActiveTintColor:Colors.PRIMARY,
          tabBarIcon: ({color, size}) => (      // bottom label size and color
            <Ionicons name="heart" size={size} color={color} />
          )
        }} />

        <Tab.Screen name='profile' 
        component={ProfileScreen}
        options={{
          tabBarLabel:'Profile',   // bottom lable
          tabBarActiveTintColor:Colors.PRIMARY,
          tabBarIcon: ({color, size}) => (      // bottom label size and color
            <FontAwesome name="user-circle" size={size} color={color} />
          )
        }} />
    </Tab.Navigator>
  )
}