import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Profile from '../screens/Profile';
import Home from '../screens/Home';
import Search from '../screens/Search';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <View style={styles.container}>
      <Drawer.Navigator
        drawerContent={(props) => (
          <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1,backgroundColor:'#45af48' }}>
            <View style={styles.drawerHeader}>
              <Image source={require('../images/logo.png')} style={styles.logo} />
              <Text
                style={styles.profileText}
                onPress={() => props.navigation.navigate('Profile')}>
                Profile
              </Text>
            </View>

           
            <View style={styles.drawerItemsContainer}>
              <DrawerItemList {...props} />
            </View>

          
            <View style={styles.logoutContainer}>
              <TouchableOpacity
                style={styles.logoutButton}
                onPress={() => {
                  props.navigation.navigate('Login');
                }}
              >
                <Text style={styles.logoutText}>LogOut</Text>
              </TouchableOpacity>
            </View>
          </DrawerContentScrollView>
        )}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
            headerTitle: '',
            headerTransparent: true,
            headerTintColor: 'white',
          }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
             headerShown: false,
           
            }}
        />
        <Drawer.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  drawerHeader: {
    padding: 10,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  drawerItemsContainer: {
    flex: 1, 
  },
  logoutContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    padding: 10,
  },
  logoutButton: {
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 18,
    color: '#ff3333',
    fontWeight: 'bold',
  },
});
