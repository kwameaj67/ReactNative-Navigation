import React from 'react'
import {View,StyleSheet,Text } from 'react-native'

export default function Splash(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Loading...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    text:{
        textAlign:'center',
        fontSize:20
    }
})