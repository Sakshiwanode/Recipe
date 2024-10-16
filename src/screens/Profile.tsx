import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

// Define an interface for user data
interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
  };
  phone: string;
  dob: {
    date: string;
    age: number;
  };
  location: {
    city: string;
    state: string;
    country: string;
  };
}

const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);

const Profile = ({ navigation }: any) => {
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        setUserData(data.results[0]);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Icon name="arrow-back" size={30} color="#ffffff" />
      </TouchableOpacity>

      {userData && (
        <View style={styles.profileContainer}>
          <Image source={{ uri: userData.picture.large }} style={styles.profileImage} />
          <Text style={styles.nameText}>
            {`${userData.name.title} ${userData.name.first} ${userData.name.last}`}
          </Text>
          <Text style={styles.emailText}>{userData.email}</Text>
          <Text style={styles.phoneText}>{`Phone: ${userData.phone}`}</Text>
          <Text style={styles.dobText}>{`DOB: ${new Date(userData.dob.date).toLocaleDateString()} (Age: ${userData.dob.age})`}</Text>
          <Text style={styles.locationText}>{`Location: ${userData.location.city}, ${userData.location.state}, ${userData.location.country}`}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#509750',
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#509750',
  },
  profileContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  emailText: {
    fontSize: 16,
    color: '#ffffff',
    marginTop: 5,
  },
  phoneText: {
    fontSize: 16,
    color: '#ffffff',
    marginTop: 5,
  },
  dobText: {
    fontSize: 16,
    color: '#ffffff',
    marginTop: 5,
  },
  locationText: {
    fontSize: 16,
    color: '#ffffff',
    marginTop: 5,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
});
