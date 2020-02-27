import React, { Component } from 'react'
import { Text, StyleSheet, View,Button } from 'react-native'
import { AuthContext } from '../Auth/AuthContext'


export default function SignIn({navigation}) {
    const { signIn } = React.useContext(AuthContext);
        return (
            <View style={styles.container}>
                <View style={{alignItems:'center'}}>
                    <Button
                        title="signIn"
                        onPress={() => signIn()}
                    />
                     <Button
                        title="signUp"
                        onPress={() => navigation.navigate('SignUp')}
                    />
                </View>
            </View>
        )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'center'
    }
})
