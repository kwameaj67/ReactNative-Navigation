import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import SignUp from '../screens/Auth/SignUp';
import SignIn from '../screens/Auth/SignIn';
import Profile from '../screens/Profile/Profile';
import SplashScreen from '../screens/Splash';
import {AuthContext} from '../screens/Auth/AuthContext';

const Drawer = createDrawerNavigator();
const ProfileStack = createStackNavigator();
const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();

const ProfileStackScreens = () => {
    return(
      <ProfileStack.Navigator headerMode="none">
          <ProfileStack.Screen name="Profile" component={Profile}/>
      </ProfileStack.Navigator>
    )
  }
const RootStackScreen = ({userToken}) => {
    return(
        <RootStack.Navigator headerMode="none">
            {userToken ? (
                <RootStack.Screen name="App" component={DrawerScreens} options={{animationEnabled:false}}/>
            ):
            (
                <RootStack.Screen name="Auth" component={AuthStackScreens}  options={{animationEnabled:false}}/>
            )
            }
           
        </RootStack.Navigator>
    )
}
const DrawerScreens = ()=> {
    return(
        <Drawer.Navigator>
                <Drawer.Screen name="Home" component={BottomTabNavigator}/>
                <Drawer.Screen name="Profile" component={ProfileStackScreens}/>      
        </Drawer.Navigator>
    )
}
const AuthStackScreens = ()=> {
    return(
    <AuthStack.Navigator headerMode="none">
        <AuthStack.Screen name="SignIn" component={SignIn} options={{title:"Sign in"}}/>
        <AuthStack.Screen name="SignUp" component={SignUp} options={{title:"Create account"}}/>
      </AuthStack.Navigator>
    )
}
export default function StackNavigator({navigation}) {
    const [initialNavigationState, setInitialNavigationState] = React.useState();
    const containerRef = React.useRef();
    const [isLoading,setIsLoading] = React.useState(true);
    const [userToken,setUserToken] = React.useState(null);
    
    const authContext = React.useMemo(()=>{
        return {
            signIn:()=>{
                setIsLoading(false);
                setUserToken("userId");
            },
            signUp:()=>{
                setIsLoading(false);
                setUserToken("userId")
            },
            signOut:()=>{
                setIsLoading(false);
                setUserToken(null);
            },
        }
    })
    
    React.useEffect(()=>{
            setTimeout(()=>{
                setIsLoading(false)
            },1000)
        })
        if(isLoading){
            return(
                <SplashScreen/>
            )
        }
        return (
           <AuthContext.Provider value={authContext}>
                <NavigationContainer  ref={containerRef} initialState={initialNavigationState}>
                   <RootStackScreen userToken={userToken}/>
                </NavigationContainer>
           </AuthContext.Provider>
        )
    
}

