import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';



const LogoutScreen = ({ navigation }: any) => {
  
  const handleLogout = () => {
    navigation.replace('Login');  
  };

  return (
    <View style={styles.container}>
      <Animatable.Text animation={'slideInUp'} style={styles.message}>You are logged in!</Animatable.Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
  },
});

export default LogoutScreen;
