import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from '../../Utils/Colors';

export default function Header() {
    const {user} = useUser();    // Returns the current auth state and if user is signed in or not
  return (
    <View style={styles.container}>
        <Image source={{uri:user?.imageUrl}} 
            style={{width:45, height:45, borderRadius:99}}
        />

        <Image source={require('./../../../assets/images/logos.png')}
            style={{width:200, height:42, objectFit:'contain'}}
        />
        <FontAwesome name="filter" size={26} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        // backgroundColor:Colors.WHITE_TRANSP
    }
})