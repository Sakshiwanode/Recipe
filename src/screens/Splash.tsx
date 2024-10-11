import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';


const Splash = () => {
  const navigation:any = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home')
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Animatable.Image animation="slideInUp" source={require('../images/logo.png')} style={styles.logo}/> 
      <Animatable.Text animation="slideInUp" style={styles.appName}>RecipePro</Animatable.Text>
      <Animatable.Text animation="slideInUp" style={styles.tagline}>Search AnyRecipeer with health filters</Animatable.Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#509750',
    alignItems: 'center',    
    justifyContent: 'center' 
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,        
  },
  appName: {
    fontSize: 40,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
  },
  tagline: {
    position: 'absolute',
    bottom: 50,
    fontSize: 20,
    fontWeight: '600',
    color: 'black'
  }
});
