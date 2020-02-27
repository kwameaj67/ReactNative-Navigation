import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';




export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
         <View>
                <TouchableOpacity  onPress={()=>{navigation.navigate("Details",{name:"kwame"})}} activeOpacity={0.5}>
                  <View>
                    <Text style={styles.text}> Go to details screen</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={()=>{navigation.toggleDrawer()}}>
                  <View>
                    <Text style={styles.text}> Open Drawer</Text>
                  </View>
                </TouchableOpacity>
         </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center' 
  },
  text:{
    fontSize:20,
    letterSpacing:-0.4,
    textAlign:'center'
  }
  
});
