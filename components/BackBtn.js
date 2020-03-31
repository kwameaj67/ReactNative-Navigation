import React from 'react'
import { TouchableNativeFeedback,View,StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

function backBtn(){
    const navigation = useNavigation();
    return(
      <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackgroundBorderless()} onPress={()=>{navigation.goBack()}}>
          <View style={{padding:10}}>
            <AntDesign name="arrowleft" color="black" size={20} />
          </View>
      </TouchableNativeFeedback>
    )
  }
  export default backBtn;

