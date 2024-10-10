import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Details from '../screens/Details';


const Stack =createNativeStackNavigator();

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
