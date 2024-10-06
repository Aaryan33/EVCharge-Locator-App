import { View, Text, ActivityIndicator, Image, FlatList, Pressable, Linking } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import { useAuth, useUser } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const { user } = useUser();
  const menu = [
    {
      id: 1,
      name: 'My Favorite',
      icon: 'heart-outline'
    },
    {
      id: 2,
      name: 'Support',
      icon: 'call-sharp'
    },
    {
      id: 3,
      name: 'Logout',
      icon: 'exit-outline'
    }
  ];
  const { isLoaded, signOut } = useAuth();
  const navigation = useNavigation();

  return (
    <View>
      <Text style={{ padding: 10, fontFamily: 'outfit-medium', fontSize: 30 }}>
        My
        <Text style={{ color: Colors.PRIMARY }}> Profile</Text>
      </Text>

      {!user && (
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size={'large'} color={Colors.PRIMARY} />
        </View>
      )}

      {/* User Profile Section */}
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <Image
          source={{ uri: user.imageUrl }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 99
          }}
        />
        <Text style={{
          fontFamily: 'outfit-medium',
          fontSize: 28,
          marginTop: 15
        }}>{user?.fullName}</Text>
        <Text style={{
          fontFamily: 'outfit',
          fontSize: 20,
          marginTop: 5,
          color: Colors.GRAY
        }}>{user?.primaryEmailAddress?.emailAddress}</Text>
      </View>

      <FlatList
        data={menu}
        style={{
          marginTop: 60,
          marginHorizontal: 50
        }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              item.id === 1 ?
                navigation.navigate('favorite') :
                item.id === 3 ? signOut() :
                  Linking.openURL('tel:+912223334444')
            }
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: 15,
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
              <Ionicons name={item.icon} size={40} color={Colors.PRIMARY} />
              <Text style={{
                fontSize: 25,
                fontFamily: 'outfit',
                marginLeft: 5 // Reduced space between icon and text
              }}>{item.name}</Text>
            </View>
          </Pressable>
        )}
      />

      {/* Developed by XYZ text */}
      <Text style={{
        textAlign: 'center',
        marginTop: 110,
        fontSize: 16,
        color: Colors.GRAY
      }}>
        Developed by Aaryan
      </Text>
    </View>
  )
}
