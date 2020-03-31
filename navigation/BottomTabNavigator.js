import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator,CardStyleInterpolators,TransitionPresets } from '@react-navigation/stack';
import TabBarIcon from '../components/TabBarIcon';
import Home from '../screens/Home/HomeScreen';
import Details from '../screens/Home/Details';
import LinksScreen from '../screens/LinksScreen';
import BackBtn from '../components/BackBtn';

const backBtn = ()=> {
  return(
    <BackBtn/>
  )
}
const BottomTab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SettingStack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Home';
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const HomeStackScreens = () => {
  return(
    <HomeStack.Navigator 
    headerMode="float"
    animation="fade"
    screenOptions={{
      gestureEnabled:true,
      gestureDirection:"horizontal",
      // cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
      ...TransitionPresets.SlideFromRightIOS
    }}
    >
      <HomeStack.Screen name="Home" component={Home}
       options={{
         title:"Home",
          headerStyle:{
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            // fontWeight: 'bold',
          },
          headerTitleAlign:"center",
          headerTransparent:true,
          // transitionSpec:{
          //   open:config,
          //   close:config
          // }
      }}/>
      <HomeStack.Screen name="Details" component={Details} 
        option={({route})=>{
            title:route.params.name
        }}
        options={{
          headerTitleAlign:"center",
          headerTransparent:true,
          headerLeft:backBtn,
          headerPressColorAndroid:"#e5e5e5",
          headerLeftContainerStyle:{
            padding:5
          },
        }}
      />
   </HomeStack.Navigator>
  )
}

const SettingStackScreens = () => {
 return(
    <SettingStack.Navigator>
       <SettingStack.Screen name="Settings" component={LinksScreen} 
        options={{
          headerTitleAlign:"center",
          headerTransparent: true,
          headerStyle:{
            borderBottomWidth:1,
            borderBottomColor:"#e5e5e5"
          }
        }}
       />
    </SettingStack.Navigator>
 )
}

export default function BottomTabNavigator({ navigation, route }) {
  
  // navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeStackScreens}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />,
        }}
      />
      <BottomTab.Screen
        name="Setting"
        component={SettingStackScreens}
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="setting" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Home';
    case 'Settings':
      return 'Settings';
  }
}
