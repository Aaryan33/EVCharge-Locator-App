import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from './../../Utils/Colors'
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../../../hooks/warmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = async()=>{
        try {
            const { createdSessionId, setActive } = await startOAuthFlow();
            if (createdSessionId){
                setActive({ session: createdSessionId });
            } 
            else {
                // Use signin or signup for next step
            } 
        }
        catch(err){
            console.error("OAuth error", err);
        }
    }

    return (
        <View style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            marginTop:40
        }}>
            <Image source={require('./../../../assets/images/logo.png')}
                style={styles.logoImage}
            />

            <Image source={require('./../../../assets/images/ev-charging.png')}
                style={styles.bgImage}
            />
            <View style={{padding:20}}>
                <Text style={styles.heading}>Your Ultimate EV Charging Station Locator</Text>
                <Text style={styles.desc}>Discover nearby EV charging stations, plan your trip, and access a lot more—all with just one click!</Text>

                <TouchableOpacity style={styles.button}
                onPress={onPress}
                >
                    <Text style={{
                        color:Colors.WHITE,
                        textAlign:'center',
                        fontFamily:'outfit',
                        fontSize:17
                    }}>Login with Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logoImage:{
        width:200,
        height:78,
        objectFit:'contain'
    },
    bgImage:{
        width:'100%',
        height:210,
        marginTop:10,
        objectFit:'cover'
    },
    heading:{
        fontSize:25,
        fontFamily:'outfit-bold',
        textAlign:'center',
        marginTop:20
    },
    desc:{
        fontSize:17,
        fontFamily:'outfit',
        textAlign:'center',
        marginTop:15,
        color:Colors.GRAY
    },
    button:{
        backgroundColor:Colors.PRIMARY,
        padding:16,
        display:'flex',
        borderRadius:99,
        marginTop:50
    }
})
