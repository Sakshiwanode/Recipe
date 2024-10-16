import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';


const AnimatedBtn=Animatable.createAnimatableComponent(TouchableOpacity)
const Profile = ({ navigation }:any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Icon name="arrow-back" size={30} color="#ffffff" /> 
      </TouchableOpacity>
    
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#509750',
  },
  text: {
    fontSize: 24,
  
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 10, 
    left: 10,
  },
});
