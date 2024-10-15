import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../screens/Splash';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Details from '../screens/Details';
import Login from '../screens/Login';
import DrawerNavigator from './DrawerNavigator';
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
   
      <Stack.Navigator>
         <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Search" component={Search} options={{headerShown: false}} />
        <Stack.Screen name="Details" component={Details} options={{headerShown: false}} />
        <Stack.Screen name="Drawer" component={DrawerNavigator} options={{headerShown: false}} />
      </Stack.Navigator>
  
  );
};

export default AppNavigator;
