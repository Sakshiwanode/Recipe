import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Image } from 'react-native-animatable';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.topView}>
        <Image source={require('../images/cooking.jpg')} style={styles.banner} />

        <View style={styles.transparentView}>
          <TouchableOpacity activeOpacity={0.8} style={styles.searchBox}>
            <Image source={require('../images/Search.jpg')} style={styles.search} />
            <Text style={styles.placeholder}>Please search here......</Text>
          </TouchableOpacity>

          <Text style={styles.note}>Search 1000+ recipes with one click</Text>
        </View>
      </View>

      {/* FlatList Example */}
      <FlatList
        horizontal
        data={MEAL_FILTERS}
        renderItem={({ item, index }) => (
          <View key={index}>
            {/* Add your FlatList item content here */}
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  topView: {
    width: '100%',
    height: '40%',
  },
  banner: {
    width: '100%',
    height: '100%',
  },
  transparentView: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  searchBox: {
    width: '90%',
    height: 60,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    marginTop: 50,
  },
  search: {
    width: 20,
    height: 20,
  },
  placeholder: {
    marginLeft: 15,
    fontSize: 16,
    color: 'black',
  },
  logo: {
    fontSize: 40,
    color: 'white',
    position: 'absolute',
    top: 60,
    left: 20,
  },
  note: {
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
  },
});
