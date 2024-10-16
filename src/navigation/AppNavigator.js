import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../screens/Splash';

import Login from '../screens/Login';
import DrawerNavigator from './DrawerNavigator';
import Home from '../screens/Home';
import MainTabNavigator from './TabNavigator';
import Profile from '../screens/Profile';
import ItemDetail from '../screens/ItemDetail';
import Details from '../screens/Details';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
   
      <Stack.Navigator>
         <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
        <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
        <Stack.Screen name="ItemDetail" component={ItemDetail} options={{headerShown: false}} />
        <Stack.Screen name="Details" component={Details} options={{headerShown: false}} />
       
        <Stack.Screen name="Drawer" component={DrawerNavigator}  options={{headerShown: false}} />
        <Stack.Screen name="tab" component={MainTabNavigator}  options={{headerShown: false}} />
      </Stack.Navigator>
  
  );
};

export default AppNavigator;
