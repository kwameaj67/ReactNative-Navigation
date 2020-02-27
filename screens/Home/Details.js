import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Details({route,navigation}) {
    const { name } = route.params;
  return (
    <View style={styles.container}>
         <View style={{alignItems:'center'}}>
              <Button title="click me" onPress={()=>{navigation.goBack()}}/>
              <Text> My name is :{JSON.stringify(name)}</Text>
         </View>
    </View>
  );
}

Details.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center' 
  },
  
});
