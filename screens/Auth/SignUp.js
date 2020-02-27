import React, { Component } from 'react'
import { Text, StyleSheet, View,Button } from 'react-native'
import {AuthContext} from '../Auth/AuthContext';

export default function SignUp({navigation}){
    const { signUp } = React.useContext(AuthContext);
        return (
            <View style={styles.container}>
                <View style={{alignItems:'center'}}>
                    <Button
                            title="Signup"
                            onPress={() => signUp()}
                        />
                         <Button
                        title="SignIn"
                        onPress={() => navigation.navigate('SignIn')}
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
