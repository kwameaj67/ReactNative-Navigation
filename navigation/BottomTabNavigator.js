import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TabBarIcon from '../components/TabBarIcon';
import Home from '../screens/Home/HomeScreen';
import Details from '../screens/Home/Details';
import LinksScreen from '../screens/LinksScreen';

const BottomTab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SettingStack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Home';


const HomeStackScreens = () => {
  return(
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={Home}/>
      <HomeStack.Screen name="Details" component={Details} 
        option={({route})=>{
            title:route.params.name
        }}
      />
   </HomeStack.Navigator>
  )
}

const SettingStackScreens = () => {
 return(
    <SettingStack.Navigator headerMode="none">
       <SettingStack.Screen name="Settings" component={LinksScreen}/>
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
    case 'Links':
      return 'Settings';
  }
}
