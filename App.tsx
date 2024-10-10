import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Details from './src/screens/Details';


const Stack = createNativeStackNavigator();

const AppNavigator =()=>{
    return (

        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown:false}}
        />
        <Stack.Screen
        name="Details"
        component={Details}
        options={{headerShown:false}}
        />
        </Stack.Navigator> 
        </NavigationContainer>
    )
}


export default AppNavigator;
