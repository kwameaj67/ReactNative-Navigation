import  React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AuthContext } from '../Auth/AuthContext'

export default function Profile({route,navigation}) {
  const {signOut} = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
         <View style={{alignItems:'center'}}>
              <Button title="click me" onPress={()=>{navigation.goBack()}}/>
              <Button title="open drawer" onPress={()=>{navigation.toggleDrawer()}}/>
              <Button title="signout" onPress={()=>{signOut()}}/>
         </View>
    </View>
  );
}

Profile.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center'
  },
  
});
